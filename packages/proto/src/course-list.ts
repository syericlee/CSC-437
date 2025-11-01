import { html, css, LitElement } from "lit";
import { property, state } from "lit/decorators.js";

interface Course {
    name: string;
    location: string;
    imgSrc: string;
    par: string;
    yards: string;
    rating: string;
    slope: string;
    href: string;
}

export class CourseListElement extends LitElement {
    @property()
        src?: string;

    @state()
        courses: Array<Course> = [];

    connectedCallback() {
        super.connectedCallback();
        if (this.src) this.hydrate(this.src);
    }

    hydrate(src: string) {
        fetch(src)
            .then(res => {
                if (res.ok) return res.json();
                throw new Error(`Failed to fetch: ${res.status}`);
            })
            .then((json: Array<Course>) => {
                if (json) {
                    this.courses = json;
                }
            })
            .catch(err => {
                console.error("Error loading courses:", err);
            });
    }

    render() {
        return html`
            <ul class="course-list">
                ${this.courses.map(course => this.renderCourse(course))}
            </ul>
        `;
    }

    renderCourse(course: Course) {
        return html`
            <golf-course
                name=${course.name}
                location=${course.location}
                img-src=${course.imgSrc}
                par=${course.par}
                yards=${course.yards}
                rating=${course.rating}
                slope=${course.slope}
                href=${course.href}
            ></golf-course>
        `;
    }

    static styles = css`
        .course-list {
            grid-column: 1 / -1;
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: var(--space-lg);
            list-style: none;
            padding: 0;
            margin: 0;
        }

        golf-course {
            display: block;
        }

        @media (max-width: 768px) {
            .course-list {
                grid-template-columns: 1fr;
            }
        }

        @media (min-width: 769px) and (max-width: 1023px) {
            .course-list {
                grid-template-columns: repeat(2, 1fr);
            }
        }

        @media (min-width: 1024px) {
            .course-list {
                grid-template-columns: repeat(3, 1fr);
            }
        }
    `;
}