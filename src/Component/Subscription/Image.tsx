import React from 'react'
import cc from 'classcat'

type Props = JSX.IntrinsicElements['svg']

export function component({ className, ...props }: Props) {
    const blockClassName = cc(['c-subscription-image', className])

    return (
        <svg viewBox="0 0 224 427.58" fill="none" xmlns="http://www.w3.org/2000/svg" className={blockClassName} {...props}>
            <path
                d="M218.6,89.25c-0.65,1.4-1.55,2.73-1.91,4.2c-1.51,6.2-2.81,12.45-4.29,18.66c-3.38,14.23-7.09,28.38-10.1,42.69
		c-1.03,4.88-3.25,8.72-6.48,12.08c-3.32,3.45-9.91,2.06-10.25-2.29c-0.47-6.04-1.44-12.84,0.7-18.14
		c5.83-14.46,13.19-28.3,19.94-42.38c0.17-0.36,0.34-0.87,0.64-0.98c4.72-1.77,3.53-5.77,2.39-8.61c-2.05-5.08-1.93-9.33,1.25-13.88
		c0.85-1.22,0.59-4.41-0.43-5.47c-1.83-1.91-4.45-1.28-6.35,0.73c-1.8,1.9-3.51,3.89-5.32,5.9c4.59,0.47,5.42-7.23,11.12-4.27
		c-0.93,1.5-1.62,2.79-2.48,3.96c-2.41,3.27-4.19,7.17-2.7,10.85c2.3,5.7,0.15,9.97-2.74,14.37c-1.47-0.18-2.98-0.37-4.69-0.58
		c0.12-1.33,0.22-2.47,0.32-3.57c1.56-0.37,2.86-0.67,4.83-1.14c-5.62-1.52-7-0.71-7.1,3.88c-0.05,2.63,0.42,5.27,0.55,7.91
		c0.06,1.17,0.2,2.52-0.27,3.52c-2.57,5.41-5.49,10.66-7.97,16.11c-3.3,7.28-6.68,14.58-5.22,23.01c0.15,0.89-0.74,2.37-1.58,2.95
		c-2.07,1.41-4.29,2.68-6.62,3.58c-4.84,1.87-9.2,0.08-13.8-1.69c-6.6-2.54-14.2-2.27-20.14-6.87c-0.04-0.03-0.35,0.28-0.76,0.63
		c1.2,1.07,2.37,2.12,3.53,3.16c-0.12,0.47-0.25,0.93-0.37,1.4c-8.52-0.89-17.04-1.76-25.56-2.67c-1.71-0.18-3.5-0.93-5.08-0.6
		c-3.04,0.61-3.88-0.75-3.98-3.32c-0.06-1.43-0.15-2.87-0.2-3.84c7.91,1.19,15.67,2.35,23.44,3.52c0.1-0.38,0.19-0.76,0.29-1.14
		c-3.24-0.8-6.45-1.71-9.72-2.37c-3.25-0.65-6.61-0.82-9.82-1.61c-3.58-0.88-5.42-3.15-5.34-7.21c0.27-13.67,0.29-27.34,0.36-41.01
		c0.01-2.48-0.21-4.95-0.33-7.62c9.76-1.57,18.33,3.02,27.35,3.37c0.08-0.42,0.15-0.83,0.23-1.25c-8.52-1.94-17.04-3.88-26.13-5.95
		c5.37-0.34,10.46-0.67,15.56-0.99c-0.03-0.28-0.05-0.55-0.08-0.83c-4.38,0-8.76,0-13.88,0c0-5.75,0-11.07,0-16.4
		c-0.35-0.03-0.7-0.06-1.05-0.1c-0.42,5.93-0.83,11.87-1.25,17.8c-0.35-0.05-0.71-0.1-1.06-0.15c0-11.92-0.34-23.85,0.1-35.75
		c0.43-11.56,2.06-23.09,2.36-34.65c0.16-6.45-0.52-6.8,5.67-7.39c21.61-2.08,43.22-4.25,64.87-5.85
		c9.61-0.71,19.32-0.12,28.85-0.12c1.51,14.28,3,28.37,4.49,42.47c0.93-3.05,1.45-6.1,1.28-9.12c-0.28-5.15-1.25-10.27-1.46-15.42
		c-0.23-5.71-0.02-11.44,0.21-17.15c0.1-2.61-0.83-3.68-3.41-3.6C193.1,0.49,177.13,0.22,161.3,1.6
		c-18.39,1.59-36.59,5.6-54.99,6.74c-17.89,1.11-35.92,0-53.88-0.29c-5.18-0.08-10.48-0.12-15.49-1.21
		c-6.97-1.52-13.71-4.09-20.6-6.06c-5.1-1.46-8.51,0.44-9.15,5.72C6.5,12.12,6.74,17.85,6.52,23.52c-0.11,2.75,0.01,5.57-0.6,8.22
		C4.2,39.11,6.16,46.22,7.11,53.48c0.97-2.63,1.26-5.29,1.33-7.95c0.11-4.25,0.04-8.5,0.12-12.75c0.06-3.53,0.19-7.06,0.34-10.59
		c0.25-5.53,0.4-11.08,0.88-16.59c0.21-2.41,1.94-3.48,4.34-2.55c4.95,1.92,9.84,3.99,14.79,5.9c2.47,0.95,4.98,2.15,7.55,2.44
		c7.14,0.8,14.33,1.53,21.5,1.64c15.27,0.24,30.54,0.07,46.06,0.07c1.83,12.07,0.01,24.49-0.89,36.93
		c-0.43,5.97-0.84,11.96-0.73,17.94c0.12,7.15,0.8,14.28,1.21,21.01c-3.49,0.87-6.37,1.67-9.29,2.31
		c-5.97,1.32-11.84,2.68-18.15,1.33c-4.35-0.93-9-0.39-13.48-0.79c-6.82-0.6-13.62-1.42-20.42-2.22c-1.92-0.23-3.81-0.72-5.71-1.1
		c-0.1,0.52-0.21,1.04-0.31,1.57c5.51,1.08,10.97,2.58,16.53,3.14c6.82,0.69,13.83-0.06,20.57,1.02c8.55,1.37,16.67,0.73,24.82-1.79
		c1.59-0.49,3.37-0.4,5.72-0.64c-2.35,2.19-3.98,3.71-5.61,5.23c0.27,0.32,0.53,0.65,0.8,0.97c1.52-0.76,3.05-1.53,4.59-2.3
		c0.97,3.03,0.14,4.79-2.29,6.56c-4.54,3.32-8.68,7.18-13.62,11.35c7.27-2.04,11.45-7.03,15.88-11.66c0.43,0.22,0.85,0.45,1.28,0.67
		c-0.65,2.84-1.3,5.67-1.86,8.15c0.14-0.1,0.84-0.55,2.45-1.61c-1.37,15.75-6.22,30.54-2.55,45.97c-2.36,0.54-4.12,1.12-5.93,1.34
		c-15.29,1.87-30.56,3.9-45.89,5.38c-5.29,0.51-10.8,2.2-16.08-0.41c-5.8-2.87-11.46-5.53-12.84-13.14
		c-1.61-8.89-3.99-17.66-6.38-26.39c-1.15-4.18-3.1-8.13-4.69-12.18c-0.19,0.12-0.37,0.24-0.56,0.36c3.4,15.05,6.8,30.1,10.2,45.15
		c-0.35,0.09-0.69,0.18-1.04,0.27c-1.07-2.8-1.93-5.7-3.25-8.38c-5.93-12.01-8.24-24.93-9.9-38.05c-0.59-4.63-0.96-9.43-4.99-13.9
		c1.12,7.06,2.38,13.13,3,19.26c1.82,17.81,8.82,34.26,13.13,51.42c1.64,6.52,5.08,8.36,11.65,7.12c1.7-0.32,3.66-0.45,4.96-1.4
		c4.7-3.41,10.29-2.82,15.47-3.53c10.24-1.42,20.6-1.96,30.9-3.07c6.15-0.66,6.26-0.86,7.59,4.85c0.34,1.46-0.43,3.17-0.78,5.27
		c1.05,0.41,2.31,1.19,3.65,1.39c10.76,1.6,21.53,3.07,32.3,4.62c5.79,0.83,11.57,1.73,17.35,2.59c1.97,0.3,4.23,1.35,5.87,0.75
		c7.35-2.7,10.97,1.24,13.84,7c0.06,0.12,0.16,0.21,0.24,0.32c9.46,13.23,17.16,27.28,19.84,43.59c3,18.23-0.62,34.76-12.58,49.3
		c1.86-1.21,3.78-2.51,5.49-4.04c10-8.93,12.8-21.19,15.12-33.55c0.68-3.61,1.35-7.79,0.21-11.07
		c-3.76-10.81-7.85-21.56-12.76-31.88c-4.44-9.31-10.63-17.63-19.14-24.07c4.04-5.04,6.1-9.95-0.74-14.68
		c-1.28,3.57-2.59,7.23-3.81,10.64c-5.3-1.53-10.43-3.85-15.74-4.38c-13.23-1.33-26.54-2.11-39.83-2.51c-4.03-0.12-6-0.96-6.16-5.56
		c6.84-1.79,13.82-3.64,20.81-5.42c0.58-0.15,1.29,0.24,1.95,0.32c7.11,0.83,14.21,1.75,21.34,2.42c6.47,0.61,13.02,0.64,19.45,1.52
		c3.34,0.46,6.45,2.43,9.77,3.29c7.05,1.84,14.28,3.01,21.22,5.16c9.51,2.95,20.09-6.83,21.35-14.04c1.57-8.98,3.4-17.93,5.45-26.81
		c2.56-11.09,5.58-22.08,8.14-33.17c0.54-2.34-0.06-4.94-0.14-7.41C219.52,89.35,219.06,89.3,218.6,89.25z M34.63,170.09
		c-10.67-0.2-10.67-0.21-14.41-13.44c5.22,4.59,10.05,8.83,14.87,13.07C34.99,169.81,34.8,170.09,34.63,170.09z M94.4,171.81
		c14.3,1.01,28.62,1.79,42.86,3.38c4.79,0.54,9.34,3.22,14.84,5.23c-5.33,1.62-55.53-4.61-61-7.43
		C92.59,172.43,93.52,171.75,94.4,171.81z M175.96,165.49c2.53-1.56,4.46-2.75,6.63-4.09c1.19,2.45,2.3,4.75,3.59,7.39
		C182.88,167.73,179.72,166.71,175.96,165.49z"
            />
            <path
                d="M57.06,229.32c-0.41-7.12-2.05-13.86-6.35-19.88c-1.79-2.51-2.77-5.74-3.6-8.78c-3.11-11.45,8.81-25.07,20.37-23.09
		c4.53,0.78,9.05,2.3,13.26,4.18c10.93,4.87,21.76,9.98,32.48,15.3c6.05,3,12.42,5.87,17.56,10.11c10.61,8.76,15.24,21,16.6,34.38
		c0.98,9.63,1.24,19.33,1.82,29c0.13,0,0.27,0,0.4,0.01c0.21-2.91,0.16-5.88,0.69-8.73c2.14-11.57,1.64-23.1-0.53-34.54
		c-1.92-10.12-6.45-19.06-15.07-25.02c-5.53-3.82-11.74-6.73-17.85-9.62c-12.25-5.8-24.45-11.76-37.04-16.73
		c-6.15-2.43-13.29-4.45-19.81-1.1c-14.29,7.35-19.49,20.61-11.6,35.4c2.25,4.22,4.06,9.04,4.58,13.75
		c1.31,11.85,2.61,23.53,9.26,33.92c4.3,6.72,8.19,13.71,12.3,20.55c0.99,1.64,2.12,3.19,3.18,4.79c0.43-0.24,0.85-0.48,1.28-0.72
		c-3.26-6.46-6.1-13.18-9.86-19.34C62.71,252.66,57.78,241.81,57.06,229.32z"
            />
            <path
                d="M98.23,364.02c5.11-13.67,9.51-27.66,15.44-40.96c5.58-12.53,8.82-25.26,9.09-38.9c0.1-4.9,0.39-9.86,1.27-14.67
		c1.81-9.9,4.16-19.7,6.12-29.57c0.94-4.7-0.11-8.93-3.86-12.29c-9.2-8.23-19.42-10.26-31.95-4.72c1.93,0,2.9,0.23,3.71-0.04
		c7.66-2.51,14.31-0.18,20.82,3.83c4.53,2.8,7.75,6.18,6.93,11.86c-0.92,6.31-1.68,12.69-3.3,18.83c-2.25,8.53-4.15,17-4.24,25.9
		c-0.11,10.56-1.59,20.94-5.78,30.8c-4.1,9.64-8.47,19.21-11.82,29.11c-2.51,7.41-3.59,15.29-5.31,22.97
		c0.46,0.14,0.92,0.28,1.38,0.42C97.23,365.73,97.89,364.93,98.23,364.02z"
            />
            <path
                d="M96.94,248.15c-0.4-0.35-0.81-0.69-1.21-1.04c-0.79,1.24-1.55,2.5-2.38,3.71c-0.53,0.76-1.24,1.4-1.75,2.17
		c-10.02,15.35-13.46,32.26-11.35,50.29c1.95,16.68,4.85,33.27,4.13,50.24c0.94-4.41,1.64-8.89,1.65-13.36
		c0.01-8.62-0.69-17.25-0.5-25.86c0.24-10.75,0.84-21.51,1.76-32.22c0.52-6.01,1.53-12.08,3.18-17.88
		C92.04,258.68,94.74,253.48,96.94,248.15z"
            />
            <path
                d="M102.91,405.68c-1.36-4.24-1.38-8.9-2.2-13.34c-0.64-3.46-1.6-6.86-2.41-10.29c-0.5,0.12-1,0.23-1.5,0.35
		c0.69,7.26,1.5,14.51,2.02,21.78c0.54,7.53,2.27,14.59,7.04,20.96c-1.98,0-3.55-0.45-5.12-0.88c-1.25-0.33-2.5-0.89-3.75-0.9
		c-3.35-0.03-6.7,0.22-10.05,0.3c-3.48,0.08-4.5-1.73-4.39-5.07c0.33-10.64,0.4-21.3,0.55-31.94c0.01-0.57-0.15-1.13-0.24-1.7
		c-0.31-0.04-0.63-0.09-0.94-0.13c-0.31,1.29-0.82,2.57-0.89,3.87c-0.56,10.62-1.16,21.23-1.4,31.86c-0.03,1.47,1.57,3.98,2.83,4.29
		c3.86,0.93,7.92,1.03,11.9,1.44c0.77,0.08,1.55,0.07,2.32,0.18c2.84,0.4,5.68,1.19,8.5,1.13c1.94-0.04,4.53-0.76,5.54-2.13
		c0.7-0.94-0.62-3.6-1.37-5.34C107.25,415.27,104.51,410.66,102.91,405.68z"
            />
            <path
                d="M199.3,28.83c-0.22-5.42-1.03-10.82-1.65-16.81c-2.09,0-3.67-0.1-5.24,0.02c-16.18,1.24-32.36,2.55-48.54,3.78
		c-7.16,0.54-14.34,0.82-21.48,1.52c-1.51,0.15-4.11,1.66-4.12,2.56c-0.06,6.31,0.43,12.63,0.73,18.58c4.74,0,8.96,0.01,13.19,0
		c3.98-0.01,8,0.32,11.93-0.11c12.67-1.39,25.08-5.15,38.04-3.84c3.83,0.39,7.73,0.07,11.58,0.33
		C197.51,35.12,199.45,32.47,199.3,28.83z M193,33.43c-3.6-0.09-7.21,0.16-10.79-0.14c-12.11-1-23.82,1.89-35.68,3.35
		c-5.24,0.65-10.6,0.29-15.9,0.36c-2.91,0.04-5.82,0.01-8.88,0.01c-0.45-5.81-0.91-11.85-1.42-18.45
		c25.25-1.69,49.97-3.34,75.16-5.02c0.53,5.3,1.11,10.56,1.58,15.82C197.32,32.24,195.84,33.49,193,33.43z"
            />
            <path
                d="M220.77,60.64c-1.27-1.81-2.44-4.02-2.71-6.16c-0.57-4.48-3.72-6.24-7.14-7.81c-2.41-1.1-4.96-1.88-7.48-2.72
		c-2.6-0.86-3.64,0.34-3.02,2.79c0.31,1.22,1.05,2.63,2.03,3.33c3.07,2.17,6.36,4.05,9.82,6.21c-0.39-3.3-2.82-4.52-5.45-5.37
		c-2.75-0.89-4.66-2.32-4.77-5.11c11.11,0.7,13.32,9.61,16.62,18.13c-4.12-2.64-6.45-8.19-11.95-6.68
		c-4.15,1.14-9.61-0.14-12.59,5.96c7.25,0.16,13.86,1.18,19.93,4.49c-3.8-7.18-10.44-6.18-16.78-6.02
		c5.84-3.5,11.84-2.93,16.38,0.97c1.21,1.03,2.4,2.65,3.75,2.83c3.52,0.47,3.32,2.79,3.05,5.11c-0.27,2.37-1.1,4.68-1.35,7.05
		c-0.24,2.29-0.05,4.62-0.05,6.93c0.47,0.05,0.93,0.11,1.4,0.16c0.73-2.9,1.13-5.93,2.25-8.67
		C224.99,70.47,224.19,65.52,220.77,60.64z"
            />
            <path
                d="M11.55,89.05c-0.27,0.19-0.54,0.38-0.81,0.56c-1.9-1.75-3.8-3.5-5.7-5.25c-0.31,0.21-0.62,0.41-0.92,0.62
		c5.07,6.52,6.99,13.7,4.28,21.83c0.54-0.02,1.08-0.04,1.62-0.06c0.48-4.69,0.97-9.37,1.39-13.41c1.12-2.89,2.11-5.44,3.09-7.95
		c0.04,0.03,0.99,0.63,1.94,1.23c0.53-1.08,0.98-1.98,1.51-3.06c-2.21-2.32-4.51-4.72-6.78-7.1c2.62,0.52,5.07,1.01,7.52,1.5
		c0.17-0.49,0.35-0.99,0.53-1.48c-2.68-1.44-5.26-3.72-8.07-4.08c-2.35-0.3-4.99,1.64-7.48,2.58c-2.35-6.66,1.94-10.75,7.02-14.73
		c-1.34,3.43-2.68,6.85-4.02,10.28c0.51,0.2,1.02,0.4,1.53,0.6c1.66-3.67,3.38-7.31,4.9-11.04c0.25-0.62-0.18-1.82-0.71-2.36
		c-0.36-0.37-1.49-0.24-2.16,0c-3.97,1.47-9.54,9.78-9.59,13.8C0.57,74.8,0.19,78.05,0,80.74c1.54-0.75,3.94-1.9,5.83-2.82
		C7.82,81.79,9.68,85.42,11.55,89.05z"
            />
            <path
                d="M124.17,319.26c-0.63-1.42-2.22-2.42-3.37-3.61c-0.43,0.29-0.86,0.57-1.3,0.86c3.55,6.07,3.08,12.18,0.69,18.31
		c1.51-1.56,3.02-3.12,5.13-5.29c0.48,1.76,1.13,2.77,0.89,3.51c-1.19,3.78-2.22,7.68-4.02,11.17c-3.95,7.65-8.91,14.76-10,23.7
		c-0.4,3.24-2.33,6-6.45,6.58c-2.87,0.4-5.58,1.91-8.37,2.92c0.1,0.33,0.21,0.67,0.31,1c4-1.07,8.34-1.52,11.91-3.41
		c2.67-1.41,5.7-4.43,6.23-7.18c1.57-8.22,5.66-15.07,9.55-22.19c2.28-4.18,5.22-8.64,3.53-13.9
		C127.54,327.5,125.97,323.32,124.17,319.26z"
            />
            <path
                d="M64.73,58.97c0.51,4.8,0.96,9.07,1.42,13.35c0.56,0,1.13,0,1.69,0c0-4.34,0.19-8.68-0.13-13
		c-0.08-1.09-1.63-2.56-2.81-2.98c-3.48-1.24-7.07-2.32-10.71-2.95c-3.23-0.56-6.57-0.44-10.09-0.63c0,8.44-0.01,15.74,0,23.05
		c0.01,6.41,3.11,8.84,9.75,7.93c2.45-0.34,4.99-0.04,7.47-0.26c2.13-0.19,5.53-0.07,6.08-1.2c0.99-2.04,0.28-4.91,0.28-7.43
		c-0.4-0.02-0.8-0.04-1.2-0.06c-0.37,2.39-0.73,4.77-1.14,7.42c-4.63,0-9.13,0.26-13.57-0.13c-1.76-0.15-4.81-1.65-4.86-2.67
		c-0.42-7.5-0.23-15.04-0.23-23.08c4.41,2,8.94,4.05,13.47,6.1c0.08-0.08,0.16-0.16,0.24-0.23c-2.67-1.86-5.35-3.72-9.04-6.28
		C56.98,55.17,60.34,59.74,64.73,58.97z"
            />
            <path
                d="M61.5,107.54c-0.02-0.31-0.04-0.63-0.06-0.94c-0.81,0.77-1.62,1.54-2.82,2.68c-0.78-3.84-1.46-7.16-2.14-10.48
		c-0.24-0.03-0.48-0.07-0.72-0.1c-0.7,3.44-1.39,6.89-2.09,10.33c-0.5,0-1.01,0-1.51,0c-0.5-2.29-0.99-4.58-1.7-7.82
		c-1.27,1.7-2.08,2.79-2.71,3.63c-3.76-1.47-7.67-3.01-12.04-4.72c-0.8,2.67-1.43,4.75-2.29,7.61c-1.67-4.07-2.97-7.23-4.47-10.9
		c-2.77,4.1-2.89,6.96-0.65,9.11c0.07-1.32,0.13-2.42,0.22-3.99c4.48,8.13,5,8.39,7.88,4.82c1.28,0.4,2.44,0.77,4.34,1.37
		c-1-2.17-1.56-3.36-2.5-5.39c2.09,0.56,3.27,0.88,4.06,1.09c-0.43,2.77-0.79,5.14-1.16,7.51c0.28,0.03,0.55,0.07,0.83,0.1
		c0.54-1.99,1.07-3.98,1.81-6.7c1.91,2.69,2.35,4.78,5.74,4.87c2.25,0.06,4.31,1.28,6.32-0.67c3.34,3.56,7.13-0.56,10.69,0.58
		c1.18,0.38,2.73-0.41,4.11-0.67c-0.06-0.17-0.13-0.35-0.19-0.52C67.46,108.07,64.48,107.8,61.5,107.54z"
            />
            <path
                d="M93.19,246.22c5.39-10.67,3.34-20.59-5.07-30.13c-3-3.4-4.98-7.68-7.46-11.55c-0.58-0.91-1.27-1.75-1.91-2.63
		c-0.46,0.25-0.93,0.49-1.39,0.74c1.35,3.33,2.46,6.8,4.11,9.97c3.47,6.66,8.91,12.32,9.73,20.29
		C91.63,237.13,92.44,241.3,93.19,246.22z"
            />
            <path
                d="M32.21,150.22c-0.42-4.23-0.76-8.5-1.61-12.65c-1.56-7.59-3.47-15.11-5.24-22.66c-0.78,0.51-0.91,0.88-0.84,1.22
		c2.25,11.86,4.42,23.73,6.9,35.53c0.27,1.3,2.31,3.14,3.55,3.16c5.83,0.09,11.68-0.26,17.51-0.68c2.29-0.16,3.47-1.43,2.84-4.11
		c-1.83-7.74-3.52-15.52-5.13-23.31c-0.66-3.19,0.15-7.6-1.71-9.38c-2.04-1.95-6.37-1.5-9.71-2.08c-0.1-0.02-0.23,0.13-1,0.6
		c2.78,0.48,4.98,1.11,7.21,1.18c2.7,0.08,3.23,1.35,3.34,3.77c0.2,4.34,0.49,8.72,1.31,12.98c1.19,6.11,2.9,12.13,4.6,19.04
		c-6.46,0.3-12.4,0.53-18.33,0.89C33.28,153.88,32.44,152.59,32.21,150.22z"
            />
            <path
                d="M17.49,23.56c-0.22,5.31-0.48,10.62-0.58,15.93c-0.1,5.26,0.12,5.41,5.94,5.85c-1.2-1.09-3.2-2.04-3.25-3.09
		c-0.3-6.26-0.15-12.55-0.15-19.23c4.83,1.57,9.65,3.14,14.05,4.57c0,6.81,0,12.87,0,19.2c-1.55-0.1-2.73-0.18-3.91-0.26
		c-0.02,0.3-0.04,0.6-0.05,0.9c2.1,0.19,4.21,0.38,6.24,0.56c0-7.56,0-14.56,0-21.34c-5.94-1.72-11.76-3.4-17.54-5.07
		C17.75,22.83,17.51,23.19,17.49,23.56z"
            />
            <path
                d="M199.43,87.89c-5.23,0.36-10.64-0.02-15.64,1.23c-9.19,2.3-18.26,3.52-27.66,1.75c-1.91-0.36-4.02-0.16-5.94,0.23
		c-2.04,0.42-3.97,1.39-5.91,2.1c5.62,0,10.95-0.05,16.27,0.02c2.53,0.04,5.11,0.76,7.56,0.42c10.5-1.45,20.95-3.18,31.42-4.81
		C199.51,88.52,199.47,88.2,199.43,87.89z"
            />
            <path d="M180.68,67.5c-0.11-0.02-0.21-0.04-0.32-0.06c0.1,0.11,0.19,0.2,0.29,0.31C180.66,67.65,180.67,67.58,180.68,67.5z" />
            <path
                d="M188.55,66.06c0.21-2.34-0.34-4.74-0.59-7.12c-0.2,0.04-0.4,0.08-0.6,0.13c0,2.69,0,5.39,0,8.17
		c-5.59-0.13-4.77-3.87-5.85-6.88c-0.24,2.04-0.48,4.08-0.83,7.14c1.8,0.37,3.3,0.67,4.78,0.65
		C186.56,68.12,188.48,66.88,188.55,66.06z"
            />
            <path
                d="M176.18,63.01c-0.83-0.86-1.71-1.67-2.56-2.5c-0.67,1.31-1.72,2.56-1.92,3.94c-0.33,2.19-0.09,4.47-0.09,6.74
		c1.69-0.77,3.8-1.73,5.94-2.71c3.64,8.87,3.75,8.98,6.46,8.08c-1.76-2.75-3.68-5.74-6.16-9.63c0.92,0.16,1.75,0.33,2.52,0.48
		C178.7,65.67,177.45,64.32,176.18,63.01z"
            />
            <path d="M128.1,283.46c7.03,6.1,17.51,8.3,23.6,5.22c-3.83-1.38-7.72-2.61-11.47-4.16C136.3,282.89,132.46,281.49,128.1,283.46z" />
            <path d="M37.97,147.9c-0.84,0.18-1.76,0.37-2.79,0.6C36.27,148.39,37.18,148.18,37.97,147.9z" />
            <path
                d="M37.97,147.9c6.68-1.4,7.53-1.64,7.28-11.07c1.03,2.29,2.06,4.58,3.09,6.87c0.47-0.09,0.94-0.18,1.41-0.27
		c-0.34-2.19-0.26-4.57-1.13-6.53c-0.86-1.94-2.79-4.97-4.04-4.86c-3.26,0.27-2.82,3.63-2.66,6.03
		C42.19,142.38,42.17,146.36,37.97,147.9z"
            />
            <path
                d="M132.83,120.94c5.09,0,9.81,0,14.52,0c0-0.33,0-0.66,0-0.99c-7.51-1.01-15.7,2.42-22.58-3.89
		c-0.4,1.19-0.67,1.89-0.87,2.61c-0.33,1.18-0.63,2.38-0.94,3.56c-0.87-0.96-1.72-1.94-2.62-2.87c-0.59-0.6-1.22-1.2-1.93-1.63
		c-0.16-0.09-1.1,0.57-1.08,0.83c0.08,0.99,0.13,2.58,0.7,2.84c2.11,0.96,3.77,3.16,6.86,1.72c1.85-0.86,4.44-0.16,6.94-0.16
		C132.11,122.41,132.55,121.51,132.83,120.94z"
            />
            <path
                d="M42.58,46.59c16.76,1.12,33.52,2.25,50.28,3.37c0.03-0.5,0.07-1,0.1-1.5c-16.76-1.08-33.53-2.16-50.29-3.24
		C42.64,45.67,42.61,46.13,42.58,46.59z"
            />
            <path
                d="M165.17,41.32c-0.44,0.28-1.24,0.02-1.69,0.3c-1.41,0.87-0.2,6.66,1.54,6.73c0.12-0.94,0.25-1.91,0.34-2.66
		c1.5,0,2.75,0,3.22,0c1.43,1.35,2.51,3.22,3.62,3.24c2.45,0.03,5.34,0.53,7.17-2c-0.49-0.43-1.32-1.29-1.43-1.21
		c-0.69,0.53-1.23,1.27-1.45,1.52c-0.28-2.47-0.55-4.93-0.83-7.39c-0.6,0.04-1.2,0.08-1.8,0.13c0,2.57,0,5.15,0,7.72
		c-0.52,0.2-1.04,0.41-1.57,0.61c-0.98-1.61-1.95-3.23-3.45-5.7c1.57,0.72,2.24,1.02,2.91,1.32c0.12-0.36,0.23-0.72,0.35-1.08
		c-1.77-0.62-3.54-1.23-5.36-1.87c0.03-0.11,0.17-0.6,0.52-1.86C166.24,40.25,165.79,40.92,165.17,41.32z"
            />
            <path d="M164.3,52.93c0,0,0-0.01,0.01-0.01l-0.01-0.01C164.3,52.92,164.3,52.93,164.3,52.93z" />
            <path
                d="M163.41,70.7c0.02,3.61,0,7.21,0,10.24c9.54,0,18.86,0,28.18,0c0-0.26,0-0.51,0-0.77c-9.04,0-18.09,0-27.3,0
		c0-9.12,0-18.18,0-27.24c-0.35,1.03-0.99,2.05-1,3.08C163.25,60.91,163.38,65.81,163.41,70.7z"
            />
            <path
                d="M87.97,385.31c0.2-5.09-0.88-9.59-3.53-14.02c-1.57-2.63-1.69-6.17-2.22-9.34c-0.2-1.2,0.29-2.51,0.58-4.63
		C78.45,365.66,80.94,377.92,87.97,385.31z"
            />
            <path
                d="M70.24,39.27c0.37-4.79,0.71-9.03,1.04-13.28c-0.35-0.06-0.71-0.12-1.06-0.19c-0.65,3.23-1.29,6.47-2.08,10.42
		c-1.48-4.08-2.63-7.26-3.78-10.45c-0.5,0.11-1,0.23-1.5,0.34c0,4.47,0,8.94,0,13.41c0.34,0.01,0.69,0.02,1.03,0.03
		c0-2.94,0-5.89,0-9.72C65.94,33.51,65.05,37.83,70.24,39.27z"
            />
            <path
                d="M76.56,39.43c1.33,0.31,2.87-0.28,4.61-0.53c0-3.4,0-7.09,0-10.78c-0.41,0.01-0.82,0.01-1.23,0.02c0,2.97,0,5.94,0,8.91
		c-0.3,0.02-0.6,0.04-0.9,0.07c-0.65-3.16-1.31-6.33-1.96-9.49c-0.32,0.03-0.64,0.07-0.95,0.1c-0.15,2.32-0.3,4.64-0.44,6.96
		c-0.21-0.01-0.43-0.02-0.64-0.03c-0.36-2.14-0.72-4.29-1.09-6.43c-0.33,0.01-0.66,0.03-0.98,0.04c0.33,2.89,0.48,5.81,1.1,8.64
		C74.3,37.92,75.55,39.2,76.56,39.43z"
            />
            <path
                d="M72.66,127.06c-5.63,0.12-11.27,0.03-16.32,0.03c4.29,3.17,21.42,3.55,27.04-0.03c-0.57-0.28-1.01-0.7-1.42-0.67
		C78.86,126.57,75.77,127,72.66,127.06z"
            />
            <path
                d="M93.62,44.56c2.22-0.94,3.73-2.29,3.16-5.53c-0.48-2.73-0.61-5.53-0.91-8.29c-0.14-1.3-0.32-2.6-0.48-3.9
		c-0.32,0.01-0.65,0.02-0.97,0.04c-0.43,2.26-0.87,4.52-1.45,7.52c-1.38-2.53-2.41-4.41-3.43-6.28c-0.34,0.19-0.67,0.39-1.01,0.58
		c0.64,2.66,0.71,5.42,3.87,7.12c1.19,0.64,2.14,2.69,2.22,4.15c0.06,1.27-1.27,2.61-1.98,3.91C92.96,44.1,93.29,44.33,93.62,44.56z
		"
            />
            <path
                d="M181.53,132.27c-4.25-1.44-3.58,3.57-6.48,5.26c-1.65-1.73-3.4-3.55-5.08-5.3c-2.2,3.22-2.74,10.56-0.64,13.37
		c4.06-1.92,0.29-6.27,2.84-8.96C178.43,142.48,178.19,133.38,181.53,132.27z"
            />
            <path
                d="M49.61,59.98c-1.94,5.23-0.54,7.07,3.69,6.49c0.7-0.1,1.65,0.44,2.24,0.96c2.52,2.23,4.13,1.35,5.94-2.11
		c-2.73-0.63-5.03-1.15-6.73-1.54C53,62.49,51.48,61.37,49.61,59.98z"
            />
            <path
                d="M29.6,19.46c0.18,0.84,0.37,1.78,0.46,2.22c2.8-0.6,5.27-1.12,8.12-1.73c-3.17-1.33-6.01-2.51-8.37-3.5
		c-3.84,0-7.39,0-10.93,0c-0.11,0.31-0.22,0.62-0.33,0.93c2.68,0.76,5.35,1.61,8.06,2.25C27.52,19.84,28.53,19.54,29.6,19.46z"
            />
            <path
                d="M47.15,23.41c-1.13-0.28-3.67,0.66-3.75,1.28c-0.52,4.07-0.54,8.21-0.73,12.33c0.23,0.03,0.46,0.06,0.69,0.09
		c0.36-1.67,0.71-3.34,1.2-5.6c2.05,2.83,3.77,5.19,5.48,7.56c0.32-0.21,0.63-0.43,0.95-0.64c-1.34-2.22-2.67-4.44-4-6.64
		c0.95-1.31,2.12-2.46,2.72-3.86C50.74,25.52,49.16,23.92,47.15,23.41z M47.48,27.46c-0.34,1.11-1.3,2.04-2.51,3.79
		c-0.32-2.12-0.58-3.24-0.63-4.37c-0.04-0.81-0.01-1.79,0.42-2.38c0.22-0.3,1.77-0.17,2.05,0.23
		C47.33,25.47,47.72,26.66,47.48,27.46z"
            />
            <path
                d="M80.95,144.9c-5.4-0.3-10.79-1.45-15.95,1.68c-0.3-0.44-0.75-1.08-1.08-1.56c-1.33,0.36-2.56,0.7-3.78,1.03
		c-0.06,0.29-0.11,0.59-0.17,0.88c2.07,0.3,4.81,1.58,6.09,0.71c4.01-2.72,8.23-0.53,12.22-1.42c3.1-0.69,6.24-1.19,9.36-1.78
		c-0.16-0.53-0.33-1.06-0.49-1.59C85.09,143.58,82.98,145.01,80.95,144.9z"
            />
            <path
                d="M181.72,114.85c5.19-0.22,10.01-6.46,7.86-10.2c-1.08-1.88-4.06-3.55-6.26-3.66c-2.93-0.15-2.32,2.71-2.06,4.85
		c0.16,1.29-0.15,2.63-0.06,3.93c0.06,0.95,0.43,1.89,0.66,2.83c0.37-0.06,0.73-0.12,1.1-0.18c0-3.41,0-6.82,0-10.23
		c0.32-0.29,0.65-0.58,0.97-0.87c1.42,1.18,3.45,2.09,4.14,3.61C189.55,108.15,187.48,111.16,181.72,114.85z"
            />
            <path
                d="M131.46,65.91c5.01-0.29,10.02-0.71,15.03-1.09c1.25-0.1,2.5-0.28,3.75-0.42c-4.94-0.81-9.87-2.03-14.43-1.21
		c-4.42,0.8-8.19,0.95-12.25-2.09c0,2.22,0,3.84,0,4.84C126.64,65.94,129.06,66.05,131.46,65.91z"
            />
            <path d="M63.49,136.08c0.03-0.06,0.06-0.11,0.1-0.16c-0.05,0-0.09,0.01-0.14,0.01C63.46,135.98,63.47,136.02,63.49,136.08z" />
            <path
                d="M60.54,135.11c-1.03-0.06-2-0.12-2.96-0.17c0.03,0.43,0.06,0.87,0.09,1.3c1.94,0,3.86-0.12,5.78-0.31
		c-0.56-1.81-0.94-3.04-1.61-5.21C61.21,132.83,60.88,133.96,60.54,135.11z"
            />
            <path d="M65.49,132.7c-0.33,0.55-0.94,1.59-1.9,3.22c6.26-0.64,12.44-2.12,18.67-3.22C76.8,132.7,71.34,132.7,65.49,132.7z" />
            <path d="M164.31,52.92c0.03,0,0.06,0,0.09-0.01C164.37,52.91,164.34,52.91,164.31,52.92C164.3,52.91,164.31,52.92,164.31,52.92z" />
            <path
                d="M195.1,55.98c0.47-1.95,0.76-3.13,1.22-5.04c-11.05,0.69-21.48,1.33-31.92,1.98c9.65,0,19.31,0,29.46,0
		C193.91,53.03,194.34,54.11,195.1,55.98z"
            />
            <path
                d="M56.59,40.22c0.95,0.16,3.14-1.9,3.28-3.13c0.28-2.51-0.45-5.14-0.77-7.72c-0.34,0.04-0.68,0.08-1.03,0.11
		c-0.35,3.19-0.7,6.38-1.05,9.56c-0.47-0.02-0.94-0.03-1.42-0.05c-2.6-3.88-1.23-8.53-2.23-12.83c-0.6,3.6-0.94,7.23-0.43,10.74
		C53.14,38.24,55.17,39.98,56.59,40.22z"
            />
            <path d="M35.61,146.94c4.05-5.8,3.17-20.21-1.63-25.76C37.29,129.43,36.53,137.97,35.61,146.94z" />
            <path
                d="M84.53,42.13c-0.13-1.79-0.28-2.94-0.29-4.09c-0.01-1.03,0.13-2.06,0.2-3.08c0.28-0.01,0.56-0.02,0.84-0.03
		c0.84,2.15,1.68,4.3,2.52,6.45c0.35-0.12,0.69-0.23,1.04-0.35c-0.67-4.38-1.35-8.76-2.12-13.79
		C82.91,31.08,81.97,37.55,84.53,42.13z"
            />
            <path
                d="M122.57,111.55c0.26-0.12,0.52-0.24,0.78-0.36c-0.99-3.75-1.98-7.51-2.97-11.26c-2.65,3.76-4.75,7.38-3.75,11.81
		c1.07-1.51,2.13-3.02,3.46-4.89C121.27,109.09,121.92,110.32,122.57,111.55z"
            />
            <path
                d="M179.46,46.82c1.17,0.86,2.33,1.72,2.86,2.12c4.19-1.6,7.87-3.01,11.55-4.42c-0.03-0.15-0.06-0.3-0.08-0.44
		c-2.26,0.58-4.51,1.15-6.92,1.77c-0.21-2.26-0.42-4.63-0.64-7c-0.34-0.02-0.69-0.04-1.03-0.06c-0.52,2.87-1.03,5.75-1.55,8.62
		c-0.21-0.05-0.42-0.1-0.64-0.15c-0.44-1.69-0.88-3.39-1.23-4.73c-0.81,1.5-1.6,2.95-2.39,4.39c0,0-0.01,0.01-0.01,0.01c0,0,0,0,0,0
		C179.39,46.93,179.46,46.82,179.46,46.82z"
            />
            <path
                d="M170.48,112.46c-0.24-1.62-0.52-3.23-0.7-4.84c-0.19-1.72-0.29-3.46-0.43-5.19c-0.46,0.06-0.91,0.11-1.37,0.17
		c0.37,2.91,0.52,5.87,1.25,8.68C169.33,111.68,169.86,112.12,170.48,112.46z"
            />
            <path d="M170.64,112.55c-0.05-0.03-0.1-0.06-0.16-0.08c0.01,0.04,0.01,0.08,0.02,0.12C170.55,112.57,170.59,112.56,170.64,112.55z" />
            <path d="M172.39,112.93c4.14-1.36,5.97-7.55,3.44-11.89c-2.64,3.5,1.53,9.88-5.2,11.5C171.28,112.87,171.99,113.06,172.39,112.93z" />
            <path
                d="M140.53,111.83c0.46,0.01,0.91,0.01,1.37,0.02c0.44-3.16,0.88-6.31,1.32-9.51c1.34-0.16,2.48-0.29,3.62-0.43
		c-0.04-0.31-0.08-0.61-0.12-0.92c-3.27,0-6.54,0-9.82,0c-0.01,0.3-0.02,0.61-0.02,0.91c1.08,0.06,2.15,0.12,3.21,0.18
		C140.24,105.52,140.39,108.68,140.53,111.83z"
            />
            <path
                d="M87.91,77.01c0.05-0.46,0.1-0.92,0.16-1.38c-5.51-0.49-11.02-0.98-16.53-1.47c-0.05,0.43-0.1,0.87-0.15,1.3
		C76.69,77.76,82.29,77.47,87.91,77.01z"
            />
            <path d="M90.25,81.8c-6.56-0.48-13.12-0.97-19.9-1.46C76.78,84.42,83.51,83.17,90.25,81.8z" />
            <path
                d="M123.63,101.01c1.17,0.33,2.34,0.66,3.19,0.9c0.37,3.29,0.72,6.3,1.06,9.31c0.4-0.03,0.81-0.06,1.21-0.1
		c0-2.99,0-5.97,0-9.06c1.9-0.3,3.45-0.54,5-0.79c0-0.29,0-0.59-0.01-0.88c-3.46,0-6.92,0-10.38,0
		C123.68,100.6,123.66,100.8,123.63,101.01z"
            />
            <path
                d="M148.8,57.45c-0.08-0.44-0.16-0.88-0.24-1.32c-8.9,0.72-17.8,1.44-26.7,2.17c0.03,0.36,0.07,0.73,0.1,1.09
		C130.9,58.75,139.85,58.1,148.8,57.45z"
            />
            <path
                d="M120.97,51.04c6.97,0,13.94,0,20.92,0c0.01-0.4,0.01-0.8,0.02-1.21c-6.99,0-13.97,0-20.96,0
		C120.96,50.23,120.97,50.64,120.97,51.04z"
            />
            <path
                d="M34.69,75.54c-3.56-0.74-7.95-0.82-10.3-3c-2-1.87-2.95-2.18-5.02-1.26c5.73,5.99,12.82,6.14,20.21,4.78
		C37.97,75.6,36.27,75.87,34.69,75.54z"
            />
            <path
                d="M89.74,71.63c0.05-0.59,0.1-1.19,0.14-1.78c-3.27-0.15-6.54-0.24-9.8-0.47c-3.23-0.22-6.46-0.58-9.69-0.88
		c-0.03,0.46-0.07,0.93-0.1,1.39C76.77,70.47,83.25,71.05,89.74,71.63z"
            />
            <path d="M91.11,148.16c-8.6,0.85-16.47,1.63-24.34,2.41C74.77,150.92,82.86,152.1,91.11,148.16z" />
            <path
                d="M163.81,101.48c-3.12,0-6.23,0-9.35,0c-0.03,0.2-0.05,0.4-0.08,0.61c1.08,0.13,2.17,0.27,3.32,0.41
		c0.15,3.42,0.28,6.38,0.42,9.33c0.39-0.02,0.79-0.03,1.18-0.05c0.3-2.99,0.61-5.97,0.91-9.01c1.39-0.23,2.52-0.42,3.64-0.61
		C163.84,101.93,163.82,101.7,163.81,101.48z"
            />
            <path
                d="M64.84,139.93c5.77,0,11.53,0,17.3,0c-0.03-0.38-0.05-0.75-0.08-1.13c-5.75,0-11.49,0-17.24,0
		C64.83,139.18,64.84,139.55,64.84,139.93z"
            />
            <path d="M144.78,52.64c-8.41,0.84-15.69,1.56-23.92,2.38C129.21,56.4,136.51,55.57,144.78,52.64z" />
            <path
                d="M89.63,64.61c-6.38-0.47-12.76-0.94-19.13-1.42c-0.03,0.48-0.07,0.96-0.1,1.44c6.39,0.38,12.78,0.75,19.18,1.13
		C89.59,65.38,89.61,64.99,89.63,64.61z"
            />
            <path
                d="M91.78,59.65c-6.62,0-13.24,0-19.87,0c0,0.39-0.01,0.78-0.01,1.17c5.63,0,11.26,0.02,16.89-0.02
		c1.01-0.01,2.01-0.21,3.02-0.32C91.81,60.21,91.8,59.93,91.78,59.65z"
            />
            <path
                d="M155.29,138.76c-5.4,0-10.8,0-16.19,0c0,0.23-0.01,0.45-0.01,0.68c5.44,0,10.88,0,16.32,0
		C155.36,139.21,155.33,138.99,155.29,138.76z"
            />
            <path
                d="M147.8,68.27c-0.03-0.33-0.06-0.66-0.09-0.99c-7.94,0.59-15.87,1.18-23.81,1.78c0,0.34,0.01,0.67,0.01,1.01
		C131.88,69.47,139.84,68.87,147.8,68.27z"
            />
            <path d="M212.68,71.4c-1.7-0.69-3.66-0.59-5.13-1.39c-4.38-2.36-6.3,0.21-7.89,4.03C203.25,68.74,208.44,73.01,212.68,71.4z" />
            <path
                d="M140.14,44.4c-1.35-0.24-2.95,0.92-4.44,1.45c0.14,0.49,0.27,0.99,0.41,1.48c3.17,0,6.34,0,9.79,0
		C143.62,46.11,141.97,44.72,140.14,44.4z"
            />
            <path d="M155.98,121.27c1.41,0.72,3.2,1.63,4.92,2.51c-0.34-2.54-0.66-4.99-0.99-7.4C158.38,118.29,157.05,119.95,155.98,121.27z" />
            <path
                d="M155.04,146.39c0.04-0.38,0.08-0.75,0.13-1.13c-5.29-0.62-10.58-1.23-15.88-1.85c-0.04,0.34-0.08,0.68-0.11,1.02
		C144.47,145.09,149.76,145.74,155.04,146.39z"
            />
            <path
                d="M119.6,143.25c3.59,0,7.18,0,10.77,0c0-0.26,0-0.52,0-0.77c-3.62,0-7.24,0-10.86,0
		C119.54,142.73,119.57,142.99,119.6,143.25z"
            />
            <path d="M173.9,120.9c-3.98-1.33-8.67,3.38-11.87-2.19C163.27,123.56,164.14,123.69,173.9,120.9z" />
            <path
                d="M132.31,45.71c-3.7,0.31-7.39,0.62-11.09,0.94c0.02,0.36,0.03,0.72,0.05,1.08c3.7-0.28,7.4-0.56,11.1-0.83
		C132.35,46.5,132.33,46.1,132.31,45.71z"
            />
            <path
                d="M21.34,48.96c-0.14,0.42-0.27,0.85-0.41,1.27c3.78,0.89,7.55,1.79,11.33,2.68c0.08-0.34,0.16-0.67,0.23-1.01
		C28.77,50.92,25.05,49.94,21.34,48.96z"
            />
            <path
                d="M20.16,58.17c4.41,0.8,8.82,1.6,13.24,2.4c0.13-0.47,0.27-0.94,0.4-1.41c-4.5-0.6-8.99-1.2-13.49-1.81
		C20.27,57.63,20.22,57.9,20.16,58.17z"
            />
            <path
                d="M158.72,26.02c1.24-1.92,2.44-3.8,3.65-5.67c-0.27-0.17-0.54-0.33-0.81-0.5c-0.86,1.27-1.73,2.53-3.4,4.98
		c-0.68-2.82-1.09-4.5-1.57-6.52c-0.53,0.57-1.13,0.94-1.29,1.45c-0.95,3.06-2.4,5.2-6.17,4.91c-0.79-0.06-2.14,1.39-2.49,2.4
		c-0.75,2.17-1.03,4.51-1.58,7.19c-3.19-1.97-2.3-9.58-9.26-5c0-3.19,0-5.68,0-8.91c-1.26,2.69-2.13,4.54-3,6.4
		c0.9,1.08,1.81,2.16,2.84,3.38c1.26-0.51,2.58-1.05,4.22-1.72c0.8,1.73,1.44,3.46,2.37,5.01c0.47,0.79,1.63,1.91,2.18,1.76
		c0.94-0.26,1.86-1.27,2.38-2.19c0.42-0.73,0.1-1.84,0.33-2.72c0.64-2.45,0.06-6.37,4.81-4.27c0.36,0.16,1.18-0.04,1.41-0.36
		c2.46-3.32,3.84-2.68,4.58,1.11c0.07,0.37,0.77,0.64,1.22,0.9c1.56,0.92,3.14,1.81,4.72,2.72
		C165.48,25.55,159.83,28.04,158.72,26.02z"
            />
            <path
                d="M175.23,22.36c0.76-1.64,1.52-3.27,2.24-4.81c-1.71,0.9-3.48,1.83-5.76,3.03c2.03,1.27,4.04,2.49,5.98,3.82
		c0.15,0.1-0.43,1.1-0.24,1.39c0.2,0.31,0.93,0.27,1.43,0.39c0.09-1.71,0.17-3.41,0.28-5.54c-1.24,1.07-2,1.72-2.76,2.38
		C176,22.8,175.62,22.58,175.23,22.36z"
            />
            <path
                d="M130.64,28.48c-2.24,0.63-4.09,1.15-5.95,1.68c0.07,0.23,0.13,0.45,0.2,0.68c2.66-0.3,5.31-0.6,7.35-0.82
		c0.18-1.35,0.32-2.35,0.45-3.35c-1.19-1.24-2.39-2.48-3.58-3.71C129.59,24.68,130.12,26.6,130.64,28.48z"
            />
            <path
                d="M132.69,26.66c0.03,0.03,0.07,0.07,0.1,0.1c0,0-0.01-0.01-0.01-0.01c0,0,0-0.01,0-0.01c-0.03-0.04-0.06-0.08-0.09-0.11
		C132.7,26.65,132.69,26.66,132.69,26.66z"
            />
        </svg>
    )
}
