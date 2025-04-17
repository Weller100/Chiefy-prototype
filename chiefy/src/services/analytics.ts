"use client";

type AnalyticsEvent = {
  eventName: string;
  timestamp: number;
  userId?: string;
  metadata?: Record<string, any>;
};

class Analytics {
  private static events: AnalyticsEvent[] = [];

  static trackEvent(eventName: string, metadata?: Record<string, any>) {
    const event: AnalyticsEvent = {
      eventName,
      timestamp: Date.now(),
      userId: this.getUserId(), // You can implement user identification
      metadata,
    };

    this.events.push(event);
    this.saveToLocalStorage();
    this.sendToServer(event); // Implement server-side storage
  }

  private static getUserId(): string | undefined {
    // Implement user identification logic
    return localStorage.getItem('userId') || undefined;
  }

  private static saveToLocalStorage() {
    localStorage.setItem('analytics_events', JSON.stringify(this.events));
  }

  private static async sendToServer(event: AnalyticsEvent) {
    try {
      await fetch('/api/analytics', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(event),
      });
    } catch (error) {
      console.error('Failed to send analytics:', error);
    }
  }

  static getEventCounts(): Record<string, number> {
    const counts: Record<string, number> = {};
    this.events.forEach((event) => {
      counts[event.eventName] = (counts[event.eventName] || 0) + 1;
    });
    return counts;
  }
}

export default Analytics; 