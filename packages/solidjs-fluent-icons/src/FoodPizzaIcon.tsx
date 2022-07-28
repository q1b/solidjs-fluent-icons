
import { splitProps, ComponentProps, JSX } from "solid-js";

function FoodPizzaIcon(props: ComponentProps<'svg'>  & {hidden?:boolean} ):JSX.Element {
  const [local, others] = splitProps(props, [ "style", "hidden", "ref", "children" ]);
  return (
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 21" shape-rendering="geometricPrecision" fill="currentColor" aria-hidden="true" preserveAspectRatio="xMidYMid meet" style={typeof props?.style === 'string' ? `display:${props?.hidden ? 'none' : 'block'}` + ';' + props.style : { display:props?.hidden ? 'none' : 'block', ...props?.style }} ref={props.ref} {...others}>
  <path d="M7.5 9a.75.75 0 100-1.49.75.75 0 000 1.5zm3.72 1.26a.75.75 0 11-1.5 0 .75.75 0 011.5 0zM7.5 13.5a.75.75 0 100-1.5.75.75 0 000 1.5zM4 3.96c0-1.1.9-2.02 2.03-1.95 4.45.27 8.35 1.77 11.4 4.68.87.83.7 2.18-.2 2.87-1.24.96-3.12 2.4-4.23 3.2v1.75c0 .71-.55 1.5-1.5 1.5-.18 0-.34-.03-.5-.08V16c0 .71-.55 1.49-1.5 1.49-.75 0-1.25-.5-1.42-1.05L6.4 17.7A1.5 1.5 0 014 16.5V3.96zm7 10.55c0 .25.2.5.5.5s.5-.25.5-.5v-2a.5.5 0 01.21-.4c.78-.57 2.1-1.58 3.28-2.48A15.43 15.43 0 005 5.52V16.5c0 .41.47.65.8.4l2.4-1.8a.5.5 0 01.8.4v.5c0 .26.2.5.5.5a.5.5 0 00.5-.5v-1.5a.5.5 0 011 0zm5.62-5.74c.46-.36.5-1 .12-1.35C13.88 4.69 10.22 3.27 5.97 3a.93.93 0 00-.97.96v.56c4.33.03 8.4 1.69 11.3 4.5l.32-.25z"/>
</svg>

  );
}
export default FoodPizzaIcon;