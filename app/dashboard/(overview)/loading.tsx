import DashboardSkeleton from '@/app/ui/skeletons';

// export default function Loading() {
//   return (
//     <div className="flex items-center justify-center min-h-screen">
//       <span className="animate-spin rounded-full h-12 w-12 border-b-4 border-gray-900"></span>
//       <span className="sr-only">Loading...</span>
//     </div>
//   );
// }

export default function Loading() {
    return (
      <DashboardSkeleton />
    );
  }

