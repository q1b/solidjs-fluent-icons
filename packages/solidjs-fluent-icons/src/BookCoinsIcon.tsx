
import { splitProps, ComponentProps, JSX } from "solid-js";

function BookCoinsIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M4 16V4c0-1.1.9-2 2-2h8a2 2 0 012 2v11a1 1 0 01-1 1H5a1 1 0 001 1h9.5a.5.5 0 010 1H6a2 2 0 01-2-2zM15 4a1 1 0 00-1-1H6a1 1 0 00-1 1v11h10V4zm-8 7.25c0-.08.01-.15.03-.22l.45.3a5.1 5.1 0 005.49-.3c.02.07.03.14.03.22 0 .3-.18.55-.33.71-.17.18-.4.36-.65.5a4.1 4.1 0 01-4.04 0 2.8 2.8 0 01-.65-.5 1.1 1.1 0 01-.33-.71zm.03-2.22a.79.79 0 00-.03.22c0 .3.18.55.33.71.17.18.4.36.65.5a4.1 4.1 0 004.04 0c.26-.14.48-.32.65-.5.15-.16.33-.41.33-.71a.79.79 0 00-.03-.22l-.45.3a5.1 5.1 0 01-5.49-.3zM8 7c0-.21.13-.45.48-.66.36-.2.9-.34 1.52-.34.63 0 1.16.14 1.52.34.35.21.48.45.48.66 0 .21-.13.45-.48.66-.36.2-.9.34-1.52.34a3.1 3.1 0 01-1.52-.34C8.13 7.45 8 7.2 8 7zm2-2c-.76 0-1.47.16-2.02.48C7.43 5.8 7 6.31 7 7c0 .69.43 1.2.98 1.52.55.32 1.26.48 2.02.48s1.47-.16 2.02-.48c.55-.32.98-.83.98-1.52 0-.69-.43-1.2-.98-1.52A4.08 4.08 0 0010 5z"/>
</svg>

  );
}
export default BookCoinsIcon;