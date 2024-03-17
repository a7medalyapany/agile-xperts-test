import { FrameworkORLanguage } from "@/types";

export const pageLinks = 
[
	{
	  imgURL: "/assets/icons/home.svg",
	  route: "/",
	  label: "Home",
	},
	{
	  imgURL: "/assets/icons/search.svg",
	  route: "/search",
	  label: "Search",
	},
	{
		imgURL: "/assets/icons/package.svg",
		route: "/lobby",
		label: "Lobby",
	},
	{
	  imgURL: "/assets/icons/network.svg",
	  route: "/ideas",
	  label: "Ideas",
	},
	{
	  imgURL: "/assets/icons/bookmarks.svg",
	  route: "/bookmarks",
	  label: "Bookmarks",
	},
	{
	  imgURL: "/assets/icons/activity.svg",
	  route: "/activity",
	  label: "Activity",
	},
	{
	  imgURL: "/assets/icons/user.svg",
	  route: "/profile",
	  label: "Profile",
	},
];
  
export const frameworks: FrameworkORLanguage[] = [
	{ value: "next", label: "Next", icon: "/assets/techLogo/next.svg" },
	{ value: "react", label: "React", icon: "/assets/techLogo/react.svg" },
	{ value: "angular", label: "Angular", icon: "/assets/techLogo/angular.svg" },
	{ value: "vue", label: "Vue", icon: "/assets/techLogo/vue.svg" },
	{ value: "django", label: "Django", icon: "/assets/techLogo/django.svg" },
	{ value: "spring", label: "Spring", icon: "/assets/techLogo/spring.svg" },
	{ value: ".net", label: ".Net", icon: "/assets/techLogo/net.svg" },
];
  
export const languages: FrameworkORLanguage[] = [
	{ value: "python", label: "Python", icon: "/assets/techLogo/python.svg" },
	{ value: "typeScript", label: "TypeScript", icon: "/assets/techLogo/typescript.svg" },
	{ value: "java ", label: "Java", icon: "/assets/techLogo/java.svg" },
	{ value: "C#", label: "C#", icon: "/assets/techLogo/c-sharp.svg" },
	{ value: "javaScript", label: "JavaScript", icon: "/assets/techLogo/javascript.svg" },
	{ value: "swift", label: "Swift", icon: "/assets/techLogo/swift.svg" },
	{ value: "rust", label: "Rust", icon: "/assets/techLogo/rust.svg" },
	{ value: "ruby", label: "Ruby", icon: "/assets/techLogo/ruby.svg" },
	{ value: "go", label: "Go", icon: "/assets/techLogo/go.svg" },
];

