'use client';

export default function StatusMessage({message}) {
    if (message === 'loading') {
        return <p className="loading-message">Loading, loading...</p>
    }
    if (message === 'error') {
        return <p className="error-message">Error, error!</p>
    }
    if (message === 'empty') {
        return <p className="empty-message">There are no products</p>
    }
    return null;
}