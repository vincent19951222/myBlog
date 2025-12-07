
import React from 'react';
import { QuestCard } from '../components/Common';
import { getAllPosts } from '../lib/posts';

export default async function BlogPage() {
  const posts = await getAllPosts();

  return (
    <div className="container mx-auto px-4 py-12 animate-fade-in">
      <div className="text-center mb-12">
        <h1 className="font-pixel-bold-cn text-4xl text-slate-900 dark:text-white mb-4">探索日志</h1>
        <p className="text-slate-600 dark:text-gray-400 max-w-2xl mx-auto text-lg">
          这是我记录学习、BUG 和技术思考的地方。每一个日志都是一次升级。
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {posts.map((post) => (
          <div key={post.slug} className="h-full">
             <QuestCard post={{
               id: post.slug, // Use slug as ID for the link
               ...post
             }} />
          </div>
        ))}
      </div>
    </div>
  );
}
