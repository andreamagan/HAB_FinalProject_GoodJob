export interface Error {
  id: string;
  links: any;
  status: string;
  code: string;
  title: string;
  name: string;
  message: string;
  source: {
    pointer: string;
    parameter: string;
  };
  meta: any;
  data: ErrorData;
}

export interface ErrorData {
  pattern: any;
  value: string;
  key: string;
  label: string;
}
