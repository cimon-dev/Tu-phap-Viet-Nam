import LegalSupport from "./LegalSupport";
import NewsEvents from "./NewsEvents";

export default function LegalSupportAndNewsEvents() {
    return (
        <div className="flex flex-col lg:flex-row gap-5 lg:gap-13">
            <LegalSupport />
            <NewsEvents />
        </div>
    )
}