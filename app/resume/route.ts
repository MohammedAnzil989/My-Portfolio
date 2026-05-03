import { readFile } from 'fs/promises';
import path from 'path';

export async function GET() {
  const filePath = path.join(process.cwd(), 'public', 'resume.pdf');
  const file = await readFile(filePath);

  return new Response(file, {
    headers: {
      'Content-Type': 'application/pdf',
      'Content-Disposition': 'inline; filename="Mohammed Anzil Resume.pdf"',
      'Cache-Control': 'public, max-age=3600, stale-while-revalidate=86400',
    },
  });
}
