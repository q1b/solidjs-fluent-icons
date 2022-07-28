
import { splitProps, ComponentProps, JSX } from "solid-js";

function TextFontSizeIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M13 3.5c.2 0 .4.13.47.32l3 8v.02l1.5 3.98a.5.5 0 11-.94.36l-1.38-3.68h-5.3l-1.38 3.68a.5.5 0 01-.93 0L6.96 13.5H4.04l-1.08 2.69a.5.5 0 11-.92-.38l1.2-2.98v-.03l1.8-4.49a.5.5 0 01.92 0l1.8 4.5v.02l.73 1.79 1.04-2.78v-.03l3-7.99A.5.5 0 0113 3.5zm-2.28 8h4.56L13 5.42l-2.28 6.08zm-4.16 1L5.5 9.85 4.44 12.5h2.12z"/>
</svg>

  );
}
export default TextFontSizeIcon;