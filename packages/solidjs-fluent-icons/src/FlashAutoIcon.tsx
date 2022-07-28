
import { splitProps, ComponentProps, JSX } from "solid-js";

function FlashAutoIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6.2 2.77C6.31 2.31 6.73 2 7.2 2h5.25c.73 0 1.24.71 1 1.4L12.22 7h2.56c.85 0 1.3.92.93 1.6a1.5 1.5 0 00-.88-.57.07.07 0 00-.02-.02L14.77 8H11.5a.5.5 0 01-.47-.67l1.5-4.25a.06.06 0 00-.07-.08H7.21a.06.06 0 00-.06.05L4.9 10.92c0 .04.02.08.06.08h1.91a.5.5 0 01.49.62l-1.33 5.3v.04l.03.03.04.01h.01l.03-.02 6.4-6.55-.86 2.32-4.82 4.92c-.76.79-2.06.06-1.8-1L6.23 12H4.96c-.7 0-1.21-.68-1.02-1.36L6.2 2.77zM14.5 9c.2 0 .4.13.47.32l3 8a.5.5 0 11-.94.36l-1-2.68h-3.06l-1 2.68a.5.5 0 01-.94-.36l3-8A.5.5 0 0114.5 9zm1.15 5l-1.15-3.08L13.35 14h2.3z"/>
</svg>

  );
}
export default FlashAutoIcon;