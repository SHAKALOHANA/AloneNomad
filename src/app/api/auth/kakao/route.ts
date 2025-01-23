import { NextResponse } from 'next/server';
import axios from 'axios';

const REDIRECT_URI = 'http://localhost:3000/nickname'; // 리디렉션 URI

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const code = searchParams.get('code');
  console.log('route:', code);

  if (!code) {
    console.log('nonCode');
    return NextResponse.json({ message: 'No code provided' }, { status: 400 });
  }

  try {
    // 액세스 토큰 요청
    const tokenResponse = await axios.post(
      'https://kauth.kakao.com/oauth/token',
      {
        grant_type: 'authorization_code',
        client_id: process.env.NEXT_PUBLIC_KAKAO_APP_KEY,
        redirect_uri: REDIRECT_URI,
        code,
      },
      { headers: { 'Content-Type': 'application/x-www-form-urlencoded' } }
    );
    console.log(tokenResponse);

    // 사용자 정보 반환
    return NextResponse.json(tokenResponse.data);
  } catch (error) {
    console.error('Error fetching data from Kakao:', error);
    return NextResponse.json(
      { message: 'Error fetching data from Kakao' },
      { status: 500 }
    );
  }
}
