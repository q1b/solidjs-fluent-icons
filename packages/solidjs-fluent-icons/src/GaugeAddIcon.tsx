
import { splitProps, ComponentProps, JSX } from "solid-js";

function GaugeAddIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10.4 16.99a7 7 0 10-7.39-7.4c-.36.19-.7.4-1 .66L2 10a8 8 0 117.75 8c.25-.31.47-.65.66-1.01zm2.07-11.93a.5.5 0 01-.65.28A5 5 0 005.1 9.01c-.36.03-.71.1-1.05.18a6 6 0 018.13-4.78c.26.1.39.39.29.65zM8.67 10c.72.5 1.3 1.18 1.72 1.96.31-.06.61-.23.84-.5.07-.08.17-.23.27-.38l.38-.63a123.47 123.47 0 002.2-3.82l.12-.2a.5.5 0 00-.75-.63l-.18.14A335.17 335.17 0 009.3 9.2c-.14.12-.27.24-.34.33-.13.14-.22.3-.28.48zm6.27-2.48a.5.5 0 01.65.29 6 6 0 01-1.35 6.42.5.5 0 11-.7-.7 5 5 0 001.12-5.36.5.5 0 01.28-.65zM8 18.24a4.5 4.5 0 11-5-7.48 4.5 4.5 0 015 7.48zm-2.15-6.1a.5.5 0 00-.85.36V14H3.5a.5.5 0 000 1H5v1.5a.5.5 0 001 0V15h1.5a.5.5 0 000-1H6v-1.5a.5.5 0 00-.15-.35z"/>
</svg>

  );
}
export default GaugeAddIcon;