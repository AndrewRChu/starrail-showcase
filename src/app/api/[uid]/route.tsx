import { NextResponse } from "next/server";

export async function GET(
    request: Request,
    { params }: { params: { uid: string } }
) {
    const { searchParams } = new URL(request.url);
    const uid = searchParams.get("uid");
    const res = await fetch(
        `https://api.mihomo.me/sr_info_parsed/${params.uid}?lang=en`
    );
    const data = await res.json();

    return NextResponse.json(data);
}
