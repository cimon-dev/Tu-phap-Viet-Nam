import LegalSupport from "./LegalSupport";
import NewsEvents from "./NewsEvents";

export default function LegalSupportAndNewsEvents() {
    return (
        <div className="flex gap-13">
            <LegalSupport />
            <NewsEvents />
        </div>
    )
}