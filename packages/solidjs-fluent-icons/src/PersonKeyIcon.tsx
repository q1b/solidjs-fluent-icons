
import { splitProps, ComponentProps, JSX } from "solid-js";

function PersonKeyIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M10 2a4 4 0 100 8 4 4 0 000-8zM7 6a3 3 0 116 0 3 3 0 01-6 0zm-2 5a2 2 0 00-2 2c0 1.7.83 2.97 2.13 3.8A8.46 8.46 0 009 17.96V17v-.04a7.42 7.42 0 01-3.33-1A3.36 3.36 0 014 13a1 1 0 011-1h7.11a3.65 3.65 0 01.42-1H5.01zm5.15 7.85c.1.1.21.15.35.15h2c.11 0 .2-.03.27-.07.07-.04.12-.1.15-.17a.86.86 0 00.06-.24l.02-.25V18l.56-.02a.47.47 0 00.3-.12c.07-.07.11-.17.12-.3L14 17h.5c.1 0 .2-.02.27-.07a.5.5 0 00.15-.17.65.65 0 00.07-.24 2.34 2.34 0 00.01-.5v-.2c.17.07.35.11.52.14a2.87 2.87 0 002.62-.86A3.11 3.11 0 0019 13a2.94 2.94 0 00-.88-2.13 3 3 0 00-5.03 2.84l-2.94 2.94c-.1.1-.15.21-.15.35v1.5c0 .14.05.25.15.35zm7.13-7.13c.15.14.22.32.22.53 0 .2-.07.39-.22.53a.72.72 0 01-.53.22.72.72 0 01-.53-.22.72.72 0 01-.22-.53c0-.2.07-.39.22-.53a.72.72 0 01.53-.22c.2 0 .39.07.53.22z"/>
</svg>

  );
}
export default PersonKeyIcon;