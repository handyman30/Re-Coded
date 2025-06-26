'use client'

import React, { useState, useRef } from 'react'
import { Upload, Loader2, Check } from 'lucide-react'
import toast from 'react-hot-toast'

interface QuickResumeUploadProps {
  className?: string
}

export default function QuickResumeUpload({ className = '' }: QuickResumeUploadProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isDragging, setIsDragging] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)
  const fileInputRef = useRef<HTMLInputElement>(null)

  const handleFileUpload = async (file: File) => {
    if (file.size > 5 * 1024 * 1024) {
      toast.error('File size must be less than 5MB')
      return
    }

    setIsSubmitting(true)

    try {
      const formData = new FormData()
      // Using placeholder data for quick upload
      formData.append('firstName', 'Quick')
      formData.append('lastName', 'Upload')
      formData.append('email', 'quickupload@resume.com')
      formData.append('resume', file)

      const response = await fetch('/api/contact/join', {
        method: 'POST',
        body: formData,
      })

      if (!response.ok) {
        throw new Error('Failed to upload resume')
      }

      setIsSuccess(true)
      toast.success('Resume uploaded successfully! We\'ll review it and get back to you.')
      
      // Reset after 3 seconds
      setTimeout(() => {
        setIsSuccess(false)
        if (fileInputRef.current) fileInputRef.current.value = ''
      }, 3000)

    } catch (error) {
      toast.error('Failed to upload resume. Please try again.')
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleDrop = async (e: React.DragEvent) => {
    e.preventDefault()
    setIsDragging(false)
    
    const file = e.dataTransfer.files[0]
    if (file && (file.type === 'application/pdf' || file.type.includes('word'))) {
      await handleFileUpload(file)
    } else {
      toast.error('Please upload a PDF or Word document')
    }
  }

  const handleFileChange = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0]
    if (file) {
      await handleFileUpload(file)
    }
  }

  return (
    <div className={`relative ${className}`}>
      <div
        onDragOver={(e) => { e.preventDefault(); setIsDragging(true) }}
        onDragLeave={(e) => { e.preventDefault(); setIsDragging(false) }}
        onDrop={handleDrop}
        className={`
          border-2 rounded-lg p-6 text-center transition-all duration-300 cursor-pointer
          ${isDragging ? 'border-purple-500 bg-purple-50' : 'border-gray-300 border-dashed hover:border-purple-400'}
          ${isSuccess ? 'bg-green-50 border-green-500' : ''}
        `}
      >
        <input
          ref={fileInputRef}
          type="file"
          accept=".pdf,.doc,.docx"
          onChange={handleFileChange}
          className="hidden"
          id="quick-resume-upload"
        />
        
        <label htmlFor="quick-resume-upload" className="cursor-pointer">
          {isSubmitting ? (
            <Loader2 className="w-8 h-8 mx-auto animate-spin text-purple-600" />
          ) : isSuccess ? (
            <Check className="w-8 h-8 mx-auto text-green-600" />
          ) : (
            <Upload className="w-8 h-8 mx-auto text-gray-400" />
          )}
          
          <p className="mt-2 text-sm font-medium text-gray-700">
            {isSubmitting ? 'Uploading...' : isSuccess ? 'Upload Complete!' : 'Drop your resume here or click to upload'}
          </p>
          <p className="text-xs text-gray-500 mt-1">PDF or Word (max 5MB)</p>
        </label>
      </div>
    </div>
  )
} 