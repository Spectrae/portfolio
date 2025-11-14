// tests/unit/Timeline.test.tsx
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import { TimelineItem } from '@/components/Timeline/TimelineItem';
import { timelineData } from '@/data/timeline';

describe('TimelineItem', () => {
  const mockItem = timelineData[0];

  it('renders the timeline item content', () => {
    render(<TimelineItem item={mockItem} index={0} />);
    expect(screen.getByText(mockItem.role)).toBeInTheDocument();
    expect(screen.getByText(mockItem.company)).toBeInTheDocument();
    expect(screen.getByText(mockItem.date)).toBeInTheDocument();
  });

  it('toggles the description on "Show More" click', () => {
    render(<TimelineItem item={mockItem} index={0} />);
    
    const button = screen.getByRole('button', { name: /Show More/i });
    expect(screen.queryByText(mockItem.description)).not.toBeVisible();

    // Click to open
    fireEvent.click(button);
    expect(screen.getByText(mockItem.description)).toBeVisible();
    expect(button).toHaveTextContent(/Show Less/i);
    expect(button).toHaveAttribute('aria-expanded', 'true');

    // Click to close
    fireEvent.click(button);
    // Note: Framer Motion animates height, so it might still be in the DOM.
    // We check for aria-expanded instead or test for visibility after animation.
    expect(button).toHaveTextContent(/Show More/i);
    expect(button).toHaveAttribute('aria-expanded', 'false');
  });
});