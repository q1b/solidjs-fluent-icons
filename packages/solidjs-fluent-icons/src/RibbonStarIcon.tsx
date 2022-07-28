
import { splitProps, ComponentProps, JSX } from "solid-js";

function RibbonStarIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10.16 5.1a.18.18 0 00-.31 0l-.72 1.55a.18.18 0 01-.14.1l-1.7.2c-.15.02-.2.2-.1.3l1.26 1.17c.05.04.07.1.05.16l-.33 1.68c-.03.15.13.26.26.19l1.49-.84a.17.17 0 01.17 0l1.5.84c.12.07.28-.04.25-.19l-.33-1.68a.18.18 0 01.05-.16l1.26-1.16a.17.17 0 00-.1-.3l-1.7-.2a.18.18 0 01-.14-.1l-.72-1.56zM16 8c0 1.78-.77 3.37-2 4.47v5.03a.5.5 0 01-.75.43L10 16.08l-3.25 1.85A.5.5 0 016 17.5v-5.03A5.98 5.98 0 0110 2a6 6 0 016 6zm-6 6c-1.1 0-2.12-.3-3-.8v3.44l2.75-1.57a.5.5 0 01.5 0L13 16.64V13.2c-.88.5-1.9.8-3 .8zm0-1a5 5 0 100-10 5 5 0 000 10z"/>
</svg>

  );
}
export default RibbonStarIcon;