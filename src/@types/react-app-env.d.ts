/// <reference types="node" />
/// <reference types="react" />
/// <reference types="react-dom" />

declare namespace NodeJS {
  interface ProcessEnv {
    readonly ENV: 'development' | 'staging' | 'test' | 'production';
    readonly NODE_ENV: 'development' | 'staging' | 'production' | 'test';
    readonly PUBLIC_URL: string;
    readonly SENTRY_DSN: string;
    readonly SENTRY_TRACES_SAMPLE_RATE: number;
    readonly CMS_GRAPHQL_URL: string;
    readonly CMS_REST_API_URL: string;
    readonly CMS_API_KEY: string;
    readonly CMS_SPACE_ID: string;
    readonly CMS_PREVIEW_REST_API_URL: string;
    readonly CMS_ENVIRONMENT: string;
    readonly CMS_PREVIEW: string;
    readonly NAME: string;
    readonly TITLE: string;
    readonly FIREBASE_API_KEY: string;
    readonly FIREBASE_AUTH_DOMAIN: string;
    readonly FIREBASE_PROJECT_ID: string;
    readonly FIREBASE_STORAGE_BUCKET: string;
    readonly FIREBASE_MESSAGING_SENDER_ID: string;
    readonly FIREBASE_APP_ID: string;
    readonly FIREBASE_MEASUREMENT_ID: string;
    readonly BUGSNAG_API_KEY: string; 
    readonly EMAILJS_BASE_URL: string;
    readonly EMAILJS_SERVICE_ID: string;
    readonly EMAILJS_TEMPLATE_ID: string;
    readonly EMAILJS_USER_ID: string;    
  }
}

declare module '*.avif' {
  const src: string;
  export default src;
}

declare module '*.bmp' {
  const src: string;
  export default src;
}

declare module '*.gif' {
  const src: string;
  export default src;
}

declare module '*.jpg' {
  const src: string;
  export default src;
}

declare module '*.jpeg' {
  const src: string;
  export default src;
}

declare module '*.png' {
  const src: string;
  export default src;
}

declare module '*.webp' {
    const src: string;
    export default src;
}

declare module '*.svg' {
  import * as React from 'react';

  export const ReactComponent: React.FunctionComponent<React.SVGProps<
    SVGSVGElement
  > & { title?: string }>;

  const src: string;
  export default src;
}

declare module '*.module.css' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.scss' {
  const classes: { readonly [key: string]: string };
  export default classes;
}

declare module '*.module.sass' {
  const classes: { readonly [key: string]: string };
  export default classes;
}
