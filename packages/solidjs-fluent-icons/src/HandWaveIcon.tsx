
import { splitProps, ComponentProps, JSX } from "solid-js";

function HandWaveIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M15.85 1.14a.5.5 0 00-.7 0 .5.5 0 000 .72 6.57 6.57 0 011.86 5.56.5.5 0 00.42.58.5.5 0 00.56-.42 7.6 7.6 0 00-2.14-6.44zM4.63 3.04a1.6 1.6 0 013.04-.63 1.6 1.6 0 012.59.7l.08.27a1.6 1.6 0 012.55.73l1.07 3.23.58 1.7a8.5 8.5 0 01.38 3.9l-.27 2a2.5 2.5 0 01-1.51 1.96l-2.16.9c-.97.41-2.07.15-2.8-.55-3.12-2.98-5.88-3.97-6.65-4.2-.35-.11-.66-.52-.47-.97.15-.36.51-.98 1.28-1.33.6-.26 1.36-.33 2.35-.06L2.77 5.1a1.61 1.61 0 011.02-2.03c.28-.09.57-.1.84-.04zm2.15 3.64l.55 1.68a.5.5 0 11-.95.31l-.57-1.72-.95-2.52a.6.6 0 00-.76-.4.61.61 0 00-.38.76l2.25 6.55a.5.5 0 01-.67.62c-1.33-.57-2.11-.49-2.55-.3-.3.14-.5.34-.62.53a18.9 18.9 0 016.74 4.33c.47.46 1.15.6 1.72.36l2.16-.9c.5-.2.84-.65.9-1.18l.28-1.99a7.5 7.5 0 00-.34-3.44l-.58-1.7v-.01l-1.07-3.24a.6.6 0 00-1.16.3l.85 2.62a.5.5 0 01-.95.32L9.85 5.1a1.62 1.62 0 01-.04-.13l-.5-1.55a.6.6 0 00-1.15.37l.6 1.85a.5.5 0 01.03.11l.53 1.6a.5.5 0 01-.95.31L6.79 2.91a.6.6 0 00-1.13.38l1.1 3.33.02.06zm7.46-3.6a.5.5 0 01.69.16l.3.5c.5.83.76 1.78.77 2.76a.5.5 0 01-1 0c0-.79-.22-1.57-.63-2.25l-.3-.5a.5.5 0 01.17-.68z"/>
</svg>

  );
}
export default HandWaveIcon;