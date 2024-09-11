declare namespace BMap {
  class Map {
    constructor(container: string | HTMLElement);
    centerAndZoom(point: Point, zoom: number): void;
    addOverlay(overlay: Overlay): void;
    enableScrollWheelZoom(enable: boolean): void;
    addControl(control: Control): void;
  }

  class Point {
    constructor(lng: number, lat: number);
  }

  class Marker implements Overlay {
    constructor(point: Point);
    setAnimation(animation: number): void;
    addEventListener(event: string, handler: Function): void;
    openInfoWindow(infoWindow: InfoWindow): void;
  }

  interface Overlay {}

  class InfoWindow {
    constructor(content: string, opts?: InfoWindowOptions);
  }

  interface InfoWindowOptions {
    width?: number;
    height?: number;
    title?: string;
  }

  class Control {}

  class NavigationControl extends Control {}
  class ScaleControl extends Control {}
  class OverviewMapControl extends Control {}
  class MapTypeControl extends Control {}
}

declare const BMap: typeof BMap;
declare const BMAP_ANIMATION_BOUNCE: number;