// src/components/aboutComputerScience/styled.js
import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        width: 100%;
        display: flex;
        justify-content: center;
        padding: 22px 16px 10px;
        background: var(--color-bg);
    `,

    Container: styled.div`
        width: 100%;
        max-width: 1440px;
        margin: 0 auto;
        border: 1px solid var(--color-border);
        background: linear-gradient(
            180deg,
            var(--color-surface),
            var(--color-surface-2)
        );
        border-radius: 18px;
        padding: 16px;
        box-shadow: 0 18px 45px var(--color-shadow);

        .top {
            padding: 12px 12px 6px;
            border-radius: 14px;
            background: color-mix(
                in srgb,
                var(--color-primary) 8%,
                transparent
            );
            border: 1px solid
                color-mix(
                    in srgb,
                    var(--color-primary) 22%,
                    var(--color-border)
                );
            margin-bottom: 12px;
        }

        .badgeRow {
            display: flex;
            gap: 10px;
            flex-wrap: wrap;
            margin-bottom: 10px;
        }

        .badge {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            padding: 7px 10px;
            border-radius: 999px;
            background: var(--color-code-bg);
            border: 1px solid var(--color-code-border);
            color: var(--color-text-secondary);
            font-size: 12px;
            font-weight: 800;
            letter-spacing: 0.2px;

            svg {
                font-size: 14px;
                color: var(--color-text-primary);
            }
        }

        .badge.ghost {
            background: transparent;
            border: 1px dashed var(--color-border-light);
            color: var(--color-text-muted);

            svg {
                color: var(--color-text-secondary);
            }
        }

        .title {
            font-size: 22px;
            font-weight: 900;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
            margin-bottom: 6px;
        }

        .sub {
            color: var(--color-text-secondary);
            line-height: 1.65;
            font-size: 13px;
            max-width: 980px;
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
            margin-top: 12px;
        }

        .card {
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            border-radius: 16px;
            padding: 12px;
            transition:
                transform 160ms ease,
                border-color 160ms ease,
                box-shadow 160ms ease,
                background 160ms ease;
        }

        .card:hover {
            transform: translateY(-2px);
            border-color: var(--color-border-light);
            background: var(--color-surface-2);
            box-shadow: 0 16px 40px var(--color-shadow);
        }

        .cardHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .icon {
            height: 38px;
            width: 38px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 12%,
                var(--color-surface)
            );
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-primary);
            flex: 0 0 auto;

            svg {
                font-size: 16px;
            }
        }

        .headText {
            min-width: 0;
        }

        .cardTitle {
            font-weight: 900;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .cardMini {
            font-size: 12px;
            color: var(--color-text-muted);
            margin-top: 2px;
        }

        .p {
            font-size: 13px;
            color: var(--color-text-secondary);
            line-height: 1.7;
            margin-bottom: 10px;
        }

        .chips {
            display: flex;
            gap: 8px;
            flex-wrap: wrap;
        }

        .chip {
            font-size: 12px;
            padding: 6px 10px;
            border-radius: 999px;
            border: 1px solid var(--color-border);
            background: var(--color-code-bg);
            color: var(--color-text-secondary);
            transition:
                transform 140ms ease,
                border-color 140ms ease,
                background 140ms ease;
        }

        .chip:hover {
            transform: translateY(-1px);
            background: color-mix(
                in srgb,
                var(--color-primary) 10%,
                var(--color-code-bg)
            );
            border-color: var(--color-border-light);
        }

        .callout {
            margin-top: 12px;
            border-radius: 16px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 8%,
                var(--color-surface)
            );
            padding: 12px;
        }

        .callHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .callIcon {
            height: 36px;
            width: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: var(--color-surface);
            display: inline-flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-primary);

            svg {
                font-size: 16px;
            }
        }

        .callTitle {
            font-weight: 900;
            letter-spacing: 0.2px;
            color: var(--color-text-primary);
        }

        .callList {
            display: grid;
            gap: 8px;

            li {
                font-size: 13px;
                color: var(--color-text-secondary);
                padding-left: 16px;
                position: relative;
                line-height: 1.65;
            }

            li::before {
                content: "";
                position: absolute;
                left: 0;
                top: 9px;
                height: 6px;
                width: 6px;
                border-radius: 999px;
                background: var(--color-primary);
            }
        }

        @media (width < 980px) {
            .grid {
                grid-template-columns: 1fr;
            }
        }
    `,
};
