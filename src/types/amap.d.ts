declare namespace AMap {
  class Map {
    constructor(container: string | HTMLElement, options?: MapOptions);
    add(overlay: any): void;
  }

  class Marker {
    constructor(options: MarkerOptions);
  }

  class LngLat {
    constructor(lng: number, lat: number);
  }

  interface MapOptions {
    zoom?: number;
    center?: [number, number] | LngLat;
  }

  interface MarkerOptions {
    position: [number, number] | LngLat;
    title?: string;
  }
}

// 添加全局 AMap 声明
declare const AMap: typeof AMap;