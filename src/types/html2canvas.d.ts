declare module 'html2canvas' {
  function html2canvas(element: HTMLElement, options?: any): Promise<HTMLCanvasElement>;
  export = html2canvas;
}