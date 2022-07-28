
import { splitProps, ComponentProps, JSX } from "solid-js";

function TextBulletListSquareToolboxIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M5 17h4v-1H5a1 1 0 01-1-1V5a1 1 0 011-1h10a1 1 0 011 1v4.05c.37.07.7.23 1 .45V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10c0 1.1.9 2 2 2zm4.5-6h1.55c.07-.37.23-.7.45-1h-2a.5.5 0 000 1zm-2-3.75a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 3a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM6.75 14a.75.75 0 100-1.5.75.75 0 000 1.5zM9 7.5c0-.28.22-.5.5-.5h4a.5.5 0 010 1h-4a.5.5 0 01-.5-.5zm3 4.5v-.5c0-.83.67-1.5 1.5-1.5h2c.83 0 1.5.67 1.5 1.5v.5h.5c.83 0 1.5.67 1.5 1.5V15h-2v-.5a.5.5 0 00-1 0v.5h-3v-.5a.5.5 0 00-1 0v.5h-2v-1.5c0-.83.67-1.5 1.5-1.5h.5zm1-.5v.5h3v-.5a.5.5 0 00-.5-.5h-2a.5.5 0 00-.5.5zm4 4.5h2v1.5c0 .83-.67 1.5-1.5 1.5h-6a1.5 1.5 0 01-1.5-1.5V16h2v.5a.5.5 0 001 0V16h3v.5a.5.5 0 001 0V16z"/>
</svg>

  );
}
export default TextBulletListSquareToolboxIcon;