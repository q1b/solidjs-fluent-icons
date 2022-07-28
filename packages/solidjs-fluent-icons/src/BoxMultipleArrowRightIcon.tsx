
import { splitProps, ComponentProps, JSX } from "solid-js";

function BoxMultipleArrowRightIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M13.58 2.38a3 3 0 00-2.16 0L7.96 3.7A1.5 1.5 0 007 5.1v1.1a4 4 0 011 0V5.1c0-.2.13-.4.32-.47l3.46-1.33a2 2 0 011.44 0l3.46 1.33c.2.08.32.26.32.47V9.6c.36.18.7.4 1 .66V5.1a1.5 1.5 0 00-.96-1.4l-3.46-1.33zM12.04 8.7c.3.11.54.32.71.57-.33.11-.65.26-.95.43a.5.5 0 00-.12-.07L8.22 8.31a2 2 0 00-1.44 0L3.32 9.64a.5.5 0 00-.32.47v4.78c0 .2.13.4.32.47l3.46 1.33a2 2 0 001.44 0l1.07-.42c.11.32.25.63.41.92l-1.12.43a3 3 0 01-2.16 0l-3.46-1.33a1.5 1.5 0 01-.96-1.4V10.1c0-.62.38-1.18.96-1.4l3.46-1.33a3 3 0 012.16 0l3.46 1.33zm-1.6 1.3a.5.5 0 01.61.2c-.36.3-.68.63-.96 1l-2.09.8v2.5a.5.5 0 01-1 0V12l-2.8-1.07a.5.5 0 11.35-.93l2.95 1.13L10.45 10zm5.65-4.72a.5.5 0 00-.64-.28l-2.77 1.06a.5.5 0 01-.36 0L9.55 5.01a.5.5 0 00-.35.93L11.96 7c.35.14.73.14 1.08 0l2.76-1.06a.5.5 0 00.3-.65zM19 14.5a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm-2.15.36a.5.5 0 00.15-.35.5.5 0 00-.15-.35l-2-2a.5.5 0 00-.7.7L15.29 14H12.5a.5.5 0 000 1h2.8l-1.15 1.15a.5.5 0 00.7.7l2-2z"/>
</svg>

  );
}
export default BoxMultipleArrowRightIcon;