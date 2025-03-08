import { NextRequest, NextResponse } from 'next/server';
import prisma from '@/lib/prisma';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // 验证邮箱格式
    if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
      return NextResponse.json(
        { error: '请提供有效的电子邮件地址' },
        { status: 400 }
      );
    }

    // 将邮箱添加到等待列表
    await prisma.waitlist.create({
      data: { email },
    });

    return NextResponse.json(
      { success: true, message: '您已成功加入等待列表' },
      { status: 201 }
    );
  } catch (error: unknown) {
    // 处理重复邮箱的情况
    if (typeof error === 'object' && error !== null && 'code' in error && error.code === 'P2002') {
      return NextResponse.json(
        { error: '该邮箱已在等待列表中' },
        { status: 409 }
      );
    }

    console.error('Waitlist API错误:', error);
    return NextResponse.json(
      { error: '服务器错误，请稍后再试' },
      { status: 500 }
    );
  }
} 