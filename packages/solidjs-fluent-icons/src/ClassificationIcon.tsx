
import { splitProps, ComponentProps, JSX } from "solid-js";

function ClassificationIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M16.31 2.85a2.42 2.42 0 01-.02 4.18l-2.43 1.42 1.3 1.31a2.5 2.5 0 010 3.54l-1.77 1.76a1 1 0 01-1.41 0l-1.41 1.42a1 1 0 01-1.42 0L3.5 10.82a1 1 0 010-1.41l1.42-1.42-.08-.1a1 1 0 01.08-1.31L6.68 4.8a2.5 2.5 0 013.53 0l1.31 1.31 1.44-2.41a2.44 2.44 0 013.35-.86zM5.61 8.7l-1.4 1.41 5.65 5.66 1.41-1.41L5.62 8.7zm1.77-3.18L5.62 7.28l7.07 7.08 1.76-1.77a1.5 1.5 0 000-2.12l-1.7-1.71-.04-.03-1.44-1.44-.05-.06L9.5 5.52a1.5 1.5 0 00-2.12 0zm6.44-1.3l-1.56 2.63.87.87 2.66-1.55a1.43 1.43 0 00.01-2.46 1.44 1.44 0 00-1.98.5z"/>
</svg>

  );
}
export default ClassificationIcon;