// src/pages/topics/systemDesign/styled.js
import styled from "styled-components";

export const Styled = {
    Wrapper: styled.section`
        width: 100%;
        padding: 18px 16px 22px;
        max-width: 1440px;
        margin: 0 auto;

        .top {
            display: flex;
            align-items: center;
            justify-content: space-between;
            gap: 14px;
            padding: 14px 14px;
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            border-radius: 16px;
            box-shadow: 0 18px 40px var(--color-shadow);
        }

        .titleRow {
            display: flex;
            align-items: center;
            gap: 12px;
            min-width: 0;
        }

        .titleIcon {
            height: 44px;
            width: 44px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 14%,
                var(--color-surface)
            );
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-primary);
            flex: 0 0 auto;

            svg {
                font-size: 18px;
            }
        }

        .titleText {
            min-width: 0;
        }

        .title {
            font-size: 18px;
            letter-spacing: 0.2px;
            margin-bottom: 4px;
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .sub {
            font-size: 13px;
            color: var(--color-text-muted);
            white-space: nowrap;
            overflow: hidden;
            text-overflow: ellipsis;
        }

        .toggleBtn {
            display: inline-flex;
            align-items: center;
            gap: 10px;
            padding: 10px 12px;
            border-radius: 12px;
            background: var(--color-surface);
            border: 1px solid var(--color-border);
            color: var(--color-text-primary);
            flex: 0 0 auto;
            transition:
                background 160ms ease,
                border-color 160ms ease,
                transform 80ms ease,
                box-shadow 160ms ease;

            .btnIcon {
                display: inline-flex;
                align-items: center;
                justify-content: center;
                font-size: 18px;
            }

            .btnText {
                font-size: 13px;
                font-weight: 800;
                color: var(--color-text-secondary);
            }

            &:hover {
                border-color: var(--color-border-light);
                background: var(--color-surface-2);
                box-shadow: 0 0 0 4px
                    color-mix(in srgb, var(--color-primary) 14%, transparent);
            }

            &:active {
                transform: translateY(1px);
            }

            &:focus-visible {
                outline: 2px solid var(--color-primary);
                outline-offset: 3px;
            }
        }

        .toggleBtn.open {
            background: color-mix(
                in srgb,
                var(--color-primary) 10%,
                var(--color-surface)
            );
            border-color: color-mix(
                in srgb,
                var(--color-primary) 35%,
                var(--color-border)
            );
        }

        .content {
            margin-top: 12px;
            border: 1px solid var(--color-border);
            border-radius: 16px;
            background: var(--color-surface);
            overflow: hidden;

            max-height: 0;
            opacity: 0;
            transform: translateY(-6px);
            pointer-events: none;

            transition:
                max-height 260ms ease,
                opacity 220ms ease,
                transform 220ms ease;
        }

        .content.open {
            max-height: 9000px;
            opacity: 1;
            transform: translateY(0);
            pointer-events: auto;
        }

        .hintBar {
            display: flex;
            align-items: center;
            gap: 10px;
            padding: 12px 14px;
            border-bottom: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 8%,
                var(--color-surface)
            );
        }

        .hintIcon {
            font-size: 16px;
            color: var(--color-text-secondary);
            flex: 0 0 auto;
        }

        .hintText {
            font-size: 13px;
            color: var(--color-text-secondary);
        }

        .grid {
            display: grid;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 12px;
            padding: 12px;
        }

        .card {
            border: 1px solid var(--color-border);
            background: linear-gradient(
                180deg,
                var(--color-surface),
                var(--color-surface-2)
            );
            border-radius: 16px;
            padding: 12px;
            transition:
                border-color 160ms ease,
                transform 160ms ease,
                box-shadow 160ms ease;
        }

        .card:hover {
            border-color: var(--color-border-light);
            transform: translateY(-2px);
            box-shadow: 0 18px 40px var(--color-shadow);
        }

        .cardHead {
            display: flex;
            align-items: center;
            gap: 10px;
            margin-bottom: 10px;
        }

        .cardIcon {
            height: 36px;
            width: 36px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 12%,
                var(--color-surface)
            );
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-primary);
            flex: 0 0 auto;

            svg {
                font-size: 16px;
            }
        }

        .cardTitleWrap {
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

        .atGlance {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 10px;
            background: var(--color-code-bg);
            margin-bottom: 10px;
        }

        .atTitle {
            font-size: 12px;
            font-weight: 900;
            letter-spacing: 0.2px;
            color: var(--color-text-secondary);
            margin-bottom: 8px;
        }

        .bullets {
            display: grid;
            gap: 8px;

            li {
                font-size: 13px;
                color: var(--color-text-secondary);
                position: relative;
                padding-left: 16px;
            }

            li::before {
                content: "";
                position: absolute;
                left: 0;
                top: 8px;
                height: 6px;
                width: 6px;
                border-radius: 999px;
                background: var(--color-primary);
            }
        }

        .details {
            display: grid;
            gap: 10px;
        }

        .block {
            border: 1px solid var(--color-border);
            border-radius: 14px;
            padding: 10px;
            background: var(--color-surface);
        }

        .blockTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            margin-bottom: 8px;
            letter-spacing: 0.2px;
        }

        .p {
            font-size: 13px;
            color: var(--color-text-secondary);
            margin-bottom: 8px;
        }

        .example {
            border: 1px solid var(--color-code-border);
            background: var(--color-code-bg);
            border-radius: 14px;
            padding: 10px;
            margin-top: 8px;
        }

        .exTitle {
            font-size: 12px;
            font-weight: 900;
            color: var(--color-text-secondary);
            margin-bottom: 8px;
            letter-spacing: 0.2px;
        }

        .exList {
            display: grid;
            gap: 8px;

            li {
                font-size: 12px;
                color: var(--color-text-secondary);
                padding-left: 14px;
                position: relative;
            }

            li::before {
                content: "";
                position: absolute;
                left: 0;
                top: 8px;
                height: 6px;
                width: 6px;
                border-radius: 999px;
                background: var(--color-accent);
            }
        }

        .miniTable {
            margin-top: 10px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            overflow: hidden;
            background: var(--color-surface);
        }

        .miniTitle {
            padding: 10px;
            border-bottom: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-primary) 8%,
                var(--color-surface)
            );
            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
            font-size: 13px;
        }

        .rows {
            display: grid;
        }

        .row {
            display: grid;
            grid-template-columns: 140px 1fr;
            gap: 10px;
            padding: 10px;
            border-top: 1px solid var(--color-border);
        }

        .row:first-child {
            border-top: 0;
        }

        .k {
            font-weight: 900;
            color: var(--color-text-primary);
        }

        .v {
            font-size: 13px;
            color: var(--color-text-secondary);
        }

        .callout {
            margin-top: 10px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: color-mix(
                in srgb,
                var(--color-warning) 10%,
                var(--color-surface)
            );
            padding: 10px;
        }

        .calloutHead {
            display: inline-flex;
            align-items: center;
            gap: 8px;
            margin-bottom: 8px;
        }

        .calloutIcon {
            display: inline-flex;
            align-items: center;
            justify-content: center;
            font-size: 16px;
            color: var(--color-text-primary);
        }

        .calloutTitle {
            font-weight: 900;
            color: var(--color-text-primary);
            letter-spacing: 0.2px;
        }

        .calloutList {
            display: grid;
            gap: 8px;

            li {
                font-size: 13px;
                color: var(--color-text-secondary);
                padding-left: 16px;
                position: relative;
            }

            li::before {
                content: "";
                position: absolute;
                left: 0;
                top: 8px;
                height: 6px;
                width: 6px;
                border-radius: 999px;
                background: var(--color-warning);
            }
        }

        .miniTip {
            margin-top: 10px;
            border: 1px solid var(--color-border);
            border-radius: 14px;
            background: color-mix(
                in srgb,
                var(--color-primary) 8%,
                var(--color-surface)
            );
            padding: 10px;
            display: flex;
            align-items: flex-start;
            gap: 10px;
        }

        .miniTipIcon {
            font-size: 16px;
            color: var(--color-text-primary);
            flex: 0 0 auto;
            margin-top: 2px;
        }

        .miniTipText {
            font-size: 13px;
            color: var(--color-text-secondary);
            line-height: 1.6;
        }

        .footerNote {
            display: flex;
            align-items: flex-start;
            gap: 10px;
            padding: 12px 14px;
            border-top: 1px solid var(--color-border);
            background: var(--color-surface);
        }

        .footerIcon {
            height: 34px;
            width: 34px;
            border-radius: 12px;
            border: 1px solid var(--color-border);
            background: color-mix(
                in srgb,
                var(--color-accent) 10%,
                var(--color-surface)
            );
            display: flex;
            align-items: center;
            justify-content: center;
            color: var(--color-text-primary);
            flex: 0 0 auto;

            svg {
                font-size: 16px;
            }
        }

        .footerText {
            font-size: 13px;
            color: var(--color-text-secondary);
            line-height: 1.6;
        }

        .mono {
            font-family:
                ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas,
                "Liberation Mono", "Courier New", monospace;
        }

        @media (width < 980px) {
            .grid {
                grid-template-columns: 1fr;
            }

            .row {
                grid-template-columns: 120px 1fr;
            }
        }

        @media (width < 520px) {
            .sub {
                display: none;
            }
        }
    `,
};
