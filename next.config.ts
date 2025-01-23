import { createVanillaExtractPlugin } from '@vanilla-extract/next-plugin';
import type { NextConfig } from 'next';
import type { Configuration } from 'webpack';

const withVanillaExtract = createVanillaExtractPlugin();

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sprint-fe-project.s3.ap-northeast-2.amazonaws.com',
        port: '',
        pathname: '/**',
        search: '',
      },
    ],
  },
  experimental: {
    externalDir: true,
  },

  webpack(config: Configuration) {
    // 기존의 svg 로더 rule을 찾고 싶다면 아래처럼 할 수도 있지만
    // 필요 없는 경우 주석 처리 후 무시해도 됩니다.
    // const fileLoaderRule = config.module?.rules?.find(
    //   (rule) =>
    //     typeof rule !== 'string' &&
    //     rule?.test instanceof RegExp &&
    //     rule.test.test('.svg')
    // );

    // 새로 svg 로더 규칙을 추가
    config.module?.rules?.push(
      {
        // svg?url 로 불러오는 경우 (기존 file-loader 동작과 유사)
        test: /\.svg$/i,
        resourceQuery: /url/, // *.svg?url
        type: 'asset/resource', // 혹은 적절한 loader나 type을 지정
      },
      {
        // 그 외의 svg(*.svg) -> React 컴포넌트로 불러오기
        test: /\.svg$/i,
        resourceQuery: { not: [/url/] }, // exclude if *.svg?url
        use: ['@svgr/webpack'],
      }
    );

    // 만약 기존 fileLoaderRule이 있으면, 해당 rule에서 svg 처리 제외
    // if (fileLoaderRule && typeof fileLoaderRule !== 'string') {
    //   if (!fileLoaderRule.exclude) {
    //     fileLoaderRule.exclude = /\.svg$/i;
    //   } else if (Array.isArray(fileLoaderRule.exclude)) {
    //     fileLoaderRule.exclude.push(/\.svg$/i);
    //   }
    // }

    return config;
  },
};

export default withVanillaExtract(nextConfig);
