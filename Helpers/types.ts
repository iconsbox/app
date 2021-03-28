export type Package = {
  icons: {
    [name: string]: any;
  };
  license: string;
  owner?: {
    name?: string;
    url: string;
  };
  package: string;
  version: string;
};

export type Packages = { [name: string]: Package };
