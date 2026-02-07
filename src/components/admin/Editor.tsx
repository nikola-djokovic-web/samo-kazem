"use client";
import React, { useRef } from 'react';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Bold, Italic } from 'lucide-react';
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from '../ui/tooltip';

interface EditorProps extends React.ComponentPropsWithoutRef<typeof Textarea> {}

export const Editor = React.forwardRef<HTMLTextAreaElement, EditorProps>(
  (props, ref) => {
    const localRef = useRef<HTMLTextAreaElement>(null);
    const editorRef = (ref || localRef) as React.RefObject<HTMLTextAreaElement>;

    const applyFormat = (format: 'bold' | 'italic') => {
      const textarea = editorRef.current;
      if (!textarea) return;

      const start = textarea.selectionStart;
      const end = textarea.selectionEnd;
      const selectedText = textarea.value.substring(start, end);
      let newText = '';

      switch (format) {
        case 'bold':
          newText = `**${selectedText}**`;
          break;
        case 'italic':
          newText = `*${selectedText}*`;
          break;
      }

      const before = textarea.value.substring(0, start);
      const after = textarea.value.substring(end);
      
      textarea.value = before + newText + after;
      
      const event = new Event('input', { bubbles: true });
      textarea.dispatchEvent(event);
      
      textarea.focus();
      textarea.selectionStart = start + 2;
      textarea.selectionEnd = end + 2;
    };

    return (
      <div className="grid gap-2">
          <div className="border rounded-md p-1 flex items-center gap-1">
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <Button type="button" variant="outline" size="icon" onClick={() => applyFormat('bold')}><Bold className="h-4 w-4" /></Button>
                    </TooltipTrigger>
                    <TooltipContent>Bold</TooltipContent>
                </Tooltip>
                 <Tooltip>
                    <TooltipTrigger asChild>
                        <Button type="button" variant="outline" size="icon" onClick={() => applyFormat('italic')}><Italic className="h-4 w-4" /></Button>
                    </TooltipTrigger>
                    <TooltipContent>Italic</TooltipContent>
                </Tooltip>
            </TooltipProvider>
          </div>
        <Textarea ref={editorRef} {...props} />
      </div>
    );
  }
);
Editor.displayName = 'Editor';
