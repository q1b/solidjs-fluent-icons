
import { splitProps, ComponentProps, JSX } from "solid-js";

function TextFontIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M6 2c.2 0 .4.13.47.32L8.9 8.57v.02l.18.44-.53 1.4-.46-1.17H3.91l-.94 2.42a.5.5 0 11-.94-.36L3.1 8.59v-.02l2.43-6.25A.5.5 0 016 2zM4.3 8.26h3.4L6 3.88 4.3 8.26zm8.17-2.94a.5.5 0 00-.94 0L7.15 17H6.5a.5.5 0 000 1h2a.5.5 0 000-1h-.28l1.13-3h5.37l1.15 3h-.37a.5.5 0 100 1h2a.5.5 0 100-1h-.56L12.47 5.32zM14.34 13H9.72l2.29-6.09L14.34 13z"/>
</svg>

  );
}
export default TextFontIcon;