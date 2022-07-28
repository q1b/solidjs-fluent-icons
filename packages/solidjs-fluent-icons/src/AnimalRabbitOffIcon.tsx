
import { splitProps, ComponentProps, JSX } from "solid-js";

function AnimalRabbitOffIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M2.85 2.15a.5.5 0 10-.7.7L7.3 8.01c-.24.02-.48.06-.7.12A2.5 2.5 0 104 11.95v.93c0 1.18.95 2.13 2.12 2.13h6.51c.47 0 .9-.15 1.26-.41l3.26 3.25a.5.5 0 00.7-.7l-15-15zm10.32 11.73c-.16.08-.34.13-.54.13h-1.62v-.1C11 12.78 9.99 12 8.89 12H7.5a.5.5 0 000 1h1.39c.69 0 1.12.46 1.12.91v.1H6.12c-.62 0-1.12-.5-1.12-1.13v-1.33A2.55 2.55 0 017.54 9h.75l4.88 4.88zM5.66 8.54a3.55 3.55 0 00-1.6 2.38 1.5 1.5 0 111.6-2.38zm10.71 3.48c-.44.44-1.02.65-1.6.62l.9.9a3.15 3.15 0 001.41-5.26l-4.22-4.22c-.59-.59-1.55-.59-2.14 0-.6.6-.6 1.56 0 2.15l1.34 1.33c-.12.16-.22.33-.3.5a3.55 3.55 0 00-.54-.05h-1.1l1 1h.1c.23 0 .46.03.68.1l.42.11.18-.4c.1-.26.26-.57.47-.79l.5-.48-2.04-2.02a.52.52 0 010-.74c.2-.2.52-.2.72 0L16.38 9c.84.84.84 2.2 0 3.04z"/>
</svg>

  );
}
export default AnimalRabbitOffIcon;