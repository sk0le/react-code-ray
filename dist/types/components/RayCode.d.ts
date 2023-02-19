/// <reference types="react" />
import "./rayCode.css";
interface CProps {
    code: string;
    title?: string;
    padding?: 16 | 32 | 64 | 128;
    language: string;
}
export default function RayCode({ code, title, padding, language, }: CProps): JSX.Element;
export {};
