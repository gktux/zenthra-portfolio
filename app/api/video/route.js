import { NextResponse } from 'next/server';
import fs from 'fs';
import path from 'path';

export async function GET(request) {
  const { searchParams } = new URL(request.url);
  const name = searchParams.get('name');

  if (!name || (name !== 'giris1.mp4' && name !== 'girsi2.mp4')) {
    return new NextResponse('Not found', { status: 404 });
  }

  const filePath = path.join(process.cwd(), name);
  
  if (!fs.existsSync(filePath)) {
    return new NextResponse('File not found', { status: 404 });
  }

  const fileBuffer = fs.readFileSync(filePath);

  return new NextResponse(fileBuffer, {
    headers: {
      'Content-Type': 'video/mp4',
      'Cache-Control': 'public, max-age=31536000, immutable',
    },
  });
}
