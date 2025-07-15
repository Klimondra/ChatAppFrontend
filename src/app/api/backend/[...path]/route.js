import {auth} from "@/utils/auth";

export async function handler(req, { params }) {
    // region Ověření
    const session = await auth();

    if (!session) {
        return new Response(JSON.stringify({ error: "Unauthorized" }), {
            status: 401,
            headers: { "Content-Type": "application/json" },
        });
    }
    // endregion

    // region Přeposílání

    const incomingUrl = new URL(req.url);
    const queryString = incomingUrl.search;


    const backendUrl = `${process.env.API_URL}/${params.path.join("/")}${queryString}`;

    const headers = new Headers(req.headers);
    headers.delete("host");

    headers.set("X-User-Id", session.user.id || session.user.email || "unknown");

    let body = null;
    if (req.method !== "GET" && req.method !== "HEAD") {
        body = await req.text();
    }

    const backendResponse = await fetch(backendUrl, {
        method: req.method,
        headers: {
            ...headers,
            'Accept-Encoding': 'identity',
        },
        body,
    });

    const resBody = await backendResponse.text();

    const responseHeaders = new Headers(backendResponse.headers);

    return new Response(resBody, {
        status: backendResponse.status,
        headers: responseHeaders,
    });

    // endregion
}

export const GET = handler;
export const POST = handler;
export const PUT = handler;
export const DELETE = handler;
export const PATCH = handler;