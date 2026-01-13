import "./ResultsFound.css";

type ResultsFoundProps = {
    count: number;
    query: string;
    loading?: boolean;
    error?: string;
};

export default function ResultsFound({ count, query, loading, error } : ResultsFoundProps) {
    if (loading) return <div className="results-header">Loading...</div>;
    if(error) return <div className="results-header">Error: {error}</div>;

    const trimmed = query.trim();

    if(trimmed.length === 0) {
        return <div className="results-header">Results found: <b>{count}</b></div>;
    }

    return <div className="results-header">Search results: <b>{count}</b></div>;
}