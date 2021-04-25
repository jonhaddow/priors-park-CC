declare module "react-slideshow-image" {
	export class Zoom extends React.Component<ZoomProps & unknown, unknown> {
		goBack(): void;
		goNext(): void;
		goTo(index: number): void;
	}
	export class Fade extends React.Component<SlideshowProps & unknown, unknown> {
		goBack(): void;
		goNext(): void;
		goTo(index: number): void;
	}
	export class Slide extends React.Component<
		SlideshowProps & unknown,
		unknown
	> {
		goBack(): void;
		goNext(): void;
		goTo(index: number): void;
	}
	export interface SlideshowProps {
		duration?: number;
		transitionDuration?: number;
		defaultIndex?: number;
		indicators?: boolean | function;
		prevArrow?: Record<string, unknown> | function;
		nextArrow?: Record<string, unknown> | function;
		arrows?: boolean;
		autoplay?: boolean;
		infinite?: boolean;
		onChange?(oldIndex: number, newIndex: number): void;
		pauseOnHover?: boolean;
	}
	export interface ZoomProps extends SlideshowProps {
		scale: number;
	}
}
