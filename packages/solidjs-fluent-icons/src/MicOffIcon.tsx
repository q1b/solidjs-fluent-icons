
import { splitProps, ComponentProps, JSX } from "solid-js";

function MicOffIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M12 5v4.88l.9.9A3 3 0 0013 10V5a3 3 0 00-6-.12l1 1V5a2 2 0 114 0zM7 7.7L2.15 2.86a.5.5 0 11.7-.7l15 15a.5.5 0 01-.7.7l-3.63-3.62a5.48 5.48 0 01-3.02 1.25v2.02a.5.5 0 01-1 0v-2.02a5.5 5.5 0 01-5-5.48.5.5 0 011 0 4.5 4.5 0 007.3 3.52l-1.06-1.07A3 3 0 017 10V7.7zm4.02 4.02L8 8.71V10a2 2 0 003.02 1.72zm3.78.96l-.74-.74c.28-.59.44-1.25.44-1.94a.5.5 0 011 0c0 .97-.25 1.89-.7 2.68z"/>
</svg>

  );
}
export default MicOffIcon;