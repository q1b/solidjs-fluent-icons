
import { splitProps, ComponentProps, JSX } from "solid-js";

function ArrowTrendingIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M17.96 5.3a.5.5 0 00-.46-.3h-6a.5.5 0 000 1h4.8l-5.8 5.8-2.15-2.15a.5.5 0 00-.7 0l-5.5 5.5a.5.5 0 00.7.7L8 10.71l2.15 2.14c.2.2.5.2.7 0L17 6.71v4.79a.5.5 0 001 0v-6a.5.5 0 00-.04-.2z"/>
</svg>

  );
}
export default ArrowTrendingIcon;