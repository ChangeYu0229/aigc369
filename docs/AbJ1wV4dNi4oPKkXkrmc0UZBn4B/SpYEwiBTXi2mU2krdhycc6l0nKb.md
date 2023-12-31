---
title: 常见问题
slug: AbJ1wV4dNi4oPKkXkrmc0UZBn4B/SpYEwiBTXi2mU2krdhycc6l0nKb
sidebar_position: 14
---


# 常见问题

## 后台额度充足，使用 API 提示额度不足

请确认你后台创建的令牌已经分配好额度是过期时间，一般可以设置成无限制，另外额度不是填写金额，500000 额度=1 美金，可按需填写

## 出现 CDN 回源报错

请联系客服获取企业客户接口地址

## 无法登录？

请确保用户名填写正确，不要填写邮箱地址，是填写你注册时候的用户名，如遇到登录问题无法自行解决，请联系客服，第一时间为您处理

## 提示当前分组下没有可用渠道

请确保模型名称完全和列表一致，并且区分大小写

## API 基础知识科普

[12、OpenAI API 知识科普]

## 如何检验 GPT3.5 还是 GPT4？

请参照该链接提问三个英文经典问题：[https://ssw9noe1h6.feishu.cn/wiki/FytDwtuaEi2E2UkwBjpcdUkdnbh](https://ssw9noe1h6.feishu.cn/wiki/FytDwtuaEi2E2UkwBjpcdUkdnbh)

## 额度是什么？怎么计算的？

额度 = 分组倍率 * 模型倍率 * （提示 token 数 + 补全 token 数 * 补全倍率）
其中补全倍率对于 GPT3.5 固定为 1.33，GPT4 为 2，与官方保持一致。
如果是非流模式，官方接口会返回消耗的总 token，但是你要注意提示和补全的消耗倍率不一样。

## 什么是上下文？

在 GPT 用于文本生成时，它需要考虑之前输入的所有文本上下文，以生成连贯、有意义的句子。随着输入上下文的增加，GPT 生成的文本变得越来越连贯和精准。例如，如果将一篇完整的文章或段落作为输入，GPT 将能生成符合上下文连贯性的自然语言文本。因此，GPT 上下文累积得越多，生成文本的准确度和连贯性呈逐步提升趋势。

## 账户额度足够为什么提示额度不足？

请检查你的令牌额度是否足够，这个和账户额度是分开的。
令牌额度仅供用户设置最大使用量，用户可自由设置。

## ChatGPT Next Web 报错：Failed to fetch

部署的时候不要设置 BASE_URL。
检查你的接口地址和 API Key 有没有填对。

## 网站部分页面打开报错

请清理浏览器缓存 Cookie

## 为什么 gpt-4 额度消耗这么快？

gpt-4 的消耗速度是 gpt-3.5-turbo 的 20 到 40 倍，假设购买了 9w token，我们用 30 倍作为平均倍率，也就是 90000 / 30 = 3000 字左右，加上每次要附带上历史消息，能发的消息数将会进一步减半，在最极限的情况下，一条消息就能把 9w token 消耗完，所以请谨慎使用。

## 使用 Next Web 时，有哪些节省 token 的小技巧？

点开对话框上方的设置按钮，找到里面的设置项：

携带历史消息数：数量越少，消耗 token 越少，但同时 gpt 会忘记之前的对话

历史摘要：用于记录长期话题，关闭后可以减少 token 消耗

注入系统级提示词：用于提升 ChatGPT 的回复质量，关闭后可减少 token 消耗

在对话时，点击对话框上方的机器人图标，可以快捷切换模型，可以优先使用 3.5 问答，如果回答不满意，再切换为 4.0 重新提问。

