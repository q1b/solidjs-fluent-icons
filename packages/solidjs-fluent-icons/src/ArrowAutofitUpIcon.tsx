
import { splitProps, ComponentProps, JSX } from "solid-js";

function ArrowAutofitUpIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M16.14 4.8L15 3.64V17.5a.5.5 0 11-1 0V3.63L12.86 4.8a.5.5 0 01-.72-.7l1.82-1.88c.3-.3.79-.3 1.08 0l1.82 1.88a.5.5 0 11-.72.7zM5 3a2 2 0 00-2 2v10c0 1.1.9 2 2 2h6.5a.5.5 0 000-1H5a1 1 0 01-1-1V5a1 1 0 011-1h4.5a.5.5 0 000-1H5z"/>
</svg>

  );
}
export default ArrowAutofitUpIcon;