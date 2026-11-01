import { getItem, setItem } from './storageService';

export type IssueStatus = 'Open' | 'In Review' | 'Resolved';

export interface IssueRecord {
  id: string;
  orderId?: string;
  orderNumber?: number;
  userEmail: string;
  userName: string;
  userPhone: string;
  issueType: 'Revision Request' | 'Payment Query' | 'Delivery Update' | 'Technical Issue' | 'Other';
  subject: string;
  description: string;
  status: IssueStatus;
  createdAt: string;
  resolvedAt?: string;
}

const ISSUES_KEY = 'docuready_issues';

export async function createIssue(input: {
  orderId?: string;
  orderNumber?: number;
  userEmail: string;
  userName: string;
  userPhone: string;
  issueType: 'Revision Request' | 'Payment Query' | 'Delivery Update' | 'Technical Issue' | 'Other';
  subject: string;
  description: string;
}): Promise<{ issueId: string; success: boolean }> {
  const issues = getItem<IssueRecord[]>(ISSUES_KEY, []);

  const newIssue: IssueRecord = {
    id: `iss_${Date.now()}_${Math.random().toString(36).substring(2, 6)}`,
    orderId: input.orderId,
    orderNumber: input.orderNumber,
    userEmail: input.userEmail.toLowerCase().trim(),
    userName: input.userName.trim(),
    userPhone: input.userPhone.trim(),
    issueType: input.issueType,
    subject: input.subject.trim(),
    description: input.description.trim(),
    status: 'Open',
    createdAt: new Date().toISOString(),
  };

  setItem(ISSUES_KEY, [newIssue, ...issues]);
  return { issueId: newIssue.id, success: true };
}

export async function getUserIssues(userEmail: string): Promise<IssueRecord[]> {
  const issues = getItem<IssueRecord[]>(ISSUES_KEY, []);
  const cleanEmail = userEmail.toLowerCase().trim();
  return issues.filter((i) => i.userEmail === cleanEmail);
}

export async function getAllIssues(): Promise<IssueRecord[]> {
  return getItem<IssueRecord[]>(ISSUES_KEY, []);
}

export async function updateIssueStatus(
  issueId: string,
  status: IssueStatus
): Promise<{ success: boolean }> {
  const issues = getItem<IssueRecord[]>(ISSUES_KEY, []);
  const updated = issues.map((i) =>
    i.id === issueId
      ? {
          ...i,
          status,
          resolvedAt: status === 'Resolved' ? new Date().toISOString() : undefined,
        }
      : i
  );
  setItem(ISSUES_KEY, updated);
  return { success: true };
}
