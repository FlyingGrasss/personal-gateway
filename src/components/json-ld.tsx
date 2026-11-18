export type JsonLdData =
  | Record<string, unknown>
  | Array<Record<string, unknown>>;

export type JsonLdProps = {
  data: JsonLdData;
};

export function serializeJsonLd(data: JsonLdData): string {
  return JSON.stringify(data).replace(/</g, "\\u003c");
}

export function JsonLd({ data }: JsonLdProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
    />
  );
}
