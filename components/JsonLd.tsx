interface JsonLdProps {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    data: Record<string, any>;
}

/**
 * Server component that injects JSON-LD structured data into the page.
 * Use in layout.tsx files to add schema.org markup.
 */
export default function JsonLd({ data }: JsonLdProps) {
    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
        />
    );
}
