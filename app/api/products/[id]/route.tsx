import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
// import schema from "../schema";

export async function GET(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const product = await prisma.product.findUnique({
    where: { id: parseInt(id) },
  });
  if (!product)
    return NextResponse.json({ error: "User not found" }, { status: 404 });

  return NextResponse.json(product);
}
// export async function GET(
//   request: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   const { id } = await params;
//   if (parseInt(id) > 10)
//     return NextResponse.json({ error: "Player not found" }, { status: 404 });
//   if (!request)
//     return NextResponse.json({ error: "Request not found" }, { status: 404 });

//   return NextResponse.json({ id: 1, name: "Shohei Ohtani" });
// }

// export async function PUT(
//   request: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   const { id } = await params;
//   const body = await request.json();
//   const validation = schema.safeParse(body);

//   if (!validation.success)
//     return NextResponse.json(validation.error.errors, { status: 400 });

//   if (parseInt(id) > 10)
//     return NextResponse.json({ error: "Player not found" }, { status: 404 });

//   return NextResponse.json({ id: 1, name: body.name });
// }

// export async function DELETE(
//   request: NextRequest,
//   { params }: { params: { id: string } }
// ) {
//   const { id } = await params;
//   if (parseInt(id) > 1)
//     return NextResponse.json({ error: "Player not found" }, { status: 404 });

//   return NextResponse.json({});
// }
