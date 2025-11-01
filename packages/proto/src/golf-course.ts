import { html, css, LitElement } from "lit";
import { property } from "lit/decorators.js";
import reset from "./styles/reset.css.ts";

export class GolfCourseElement extends LitElement {
    @property()
    name?: string;

    @property()
    location?: string;

    @property({ attribute: "img-src" })
    imgSrc?: string;

    @property()
    par?: string;

    @property()
    yards?: string;

    @property()
    rating?: string;

    @property()
    slope?: string;

    @property()
    href?: string;

    override render() {
        return html`
            <div class="course-card">
                <div class="course-info">
                    <h2>${this.name}</h2>
                    <p class="location">${this.location}</p>
                    <img src="${this.imgSrc}" alt="${this.name}" class="course-image">
                    <p class="stats">Par: ${this.par} | Yards: ${this.yards} | Rating: ${this.rating} | Slope: ${this.slope}</p>
                    <a href="${this.href}" class="btn-start">Start Round</a>
                </div>
            </div>
        `;
    }

    static styles = [
        reset.styles,
        css`          
            .course-card {
                background-color: var(--color-background-card);
                border-radius: 8px;
                box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
            }

            .course-info {
                padding: var(--space-md);
            }

            h2 {
                color: var(--color-accent);
                margin-bottom: var(--space-xs);
                font-size: 1.25rem;
                font-family: "Roboto Slab", "Rockwell", "Courier Bold", Georgia, serif;
                font-weight: 700;
            }

            .location {
                color: var(--color-text-secondary);
                font-size: 0.9rem;
                margin-bottom: var(--space-md);
            }

            .course-image {
                width: 100%;
                height: 200px;
                object-fit: cover;
                display: block;
                margin: var(--space-md) 0;
            }

            .stats {
                color: var(--color-text-secondary);
                font-size: 0.9rem;
                margin-bottom: var(--space-md);
            }

            .btn-start {
                display: inline-block;
                background-color: var(--color-accent);
                color: var(--color-text-inverted);
                padding: var(--space-sm) var(--space-lg);
                text-decoration: none;
                border-radius: 4px;
                font-weight: 700;
            }
        `
    ];
}