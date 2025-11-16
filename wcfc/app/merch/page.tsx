"use client"

import { useState } from "react"
import Image from "next/image"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { useLanguage } from "@/contexts/language-context"
import { ShoppingCart, Plus, Minus, Trash2 } from "lucide-react"
import { Badge } from "@/components/ui/badge"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"

interface Product {
  id: number
  nameKey: string
  price: number
  image: string
  sizes: string[]
  category: string
}

interface CartItem extends Product {
  quantity: number
  selectedSize: string
}

export default function MerchPage() {
  const { t, language } = useLanguage()
  const [cart, setCart] = useState<CartItem[]>([])

  const products: Product[] = [
    {
      id: 1,
      nameKey: "jerseyHome",
      price: 15990,
      image: "/j1.png",
      sizes: ["S", "M", "L", "XL", "XXL"],
      category: "jersey"
    },
    {
      id: 2,
      nameKey: "jerseyAway",
      price: 15990,
      image: "/j2.png",
      sizes: ["S", "M", "L", "XL", "XXL"],
      category: "jersey"
    },
    {
      id: 3,
      nameKey: "shortsTraining",
      price: 8990,
      image: "/s1.png",
      sizes: ["S", "M", "L", "XL", "XXL"],
      category: "shorts"
    },
    {
      id: 4,
      nameKey: "shortsMatch",
      price: 9990,
      image: "/s2.jpg",
      sizes: ["S", "M", "L", "XL", "XXL"],
      category: "shorts"
    },
    {
      id: 5,
      nameKey: "capWCFC",
      price: 4990,
      image: "/c1.png",
      sizes: ["One Size"],
      category: "cap"
    },
    {
      id: 6,
      nameKey: "capBlack",
      price: 4990,
      image: "/c2.png",
      sizes: ["One Size"],
      category: "cap"
    },
    {
      id: 7,
      nameKey: "socksTraining",
      price: 2990,
      image: "/s11.png",
      sizes: ["36-40", "41-45"],
      category: "socks"
    },
    {
      id: 8,
      nameKey: "socksMatch",
      price: 3490,
      image: "/s22.png",
      sizes: ["36-40", "41-45"],
      category: "socks"
    }
  ]

  const addToCart = (product: Product, size: string) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(
        item => item.id === product.id && item.selectedSize === size
      )
      
      if (existingItem) {
        return prevCart.map(item =>
          item.id === product.id && item.selectedSize === size
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      }
      
      return [...prevCart, { ...product, quantity: 1, selectedSize: size }]
    })
  }

  const updateQuantity = (id: number, size: string, change: number) => {
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === id && item.selectedSize === size
          ? { ...item, quantity: Math.max(0, item.quantity + change) }
          : item
      ).filter(item => item.quantity > 0)
    )
  }

  const removeFromCart = (id: number, size: string) => {
    setCart(prevCart => prevCart.filter(
      item => !(item.id === id && item.selectedSize === size)
    ))
  }

  const getTotalPrice = () => {
    return cart.reduce((total, item) => total + item.price * item.quantity, 0)
  }

  const getTotalItems = () => {
    return cart.reduce((total, item) => total + item.quantity, 0)
  }

  return (
    <main className="min-h-screen">
      {/* Főszekció */}
      <section className="relative flex flex-col items-center justify-center px-4 py-20 text-center bg-gradient-to-b from-green-600 to-green-800 text-white">
        <ShoppingCart className="w-24 h-24 mb-6" />
        <h1 className="text-5xl font-bold mb-4 text-balance">
          {t("merchTitle")}
        </h1>
        <p className="text-2xl text-green-100">
          {t("merchTagline")}
        </p>
      </section>

      {/* Kosár gomb */}
      <div className="fixed bottom-6 right-6 z-50">
        <Sheet>
          <SheetTrigger asChild>
            <Button size="lg" className="rounded-full shadow-2xl bg-green-700 hover:bg-green-800 relative">
              <ShoppingCart className="h-6 w-6 mr-2" />
              {t("cart")}
              {getTotalItems() > 0 && (
                <Badge className="absolute -top-2 -right-2 bg-red-600 hover:bg-red-700">
                  {getTotalItems()}
                </Badge>
              )}
            </Button>
          </SheetTrigger>
          <SheetContent className="w-full sm:max-w-lg">
            <SheetHeader>
              <SheetTitle>{t("shoppingCart")}</SheetTitle>
              <SheetDescription>
                {t("reviewItems")}
              </SheetDescription>
            </SheetHeader>
            <div className="mt-8 space-y-4">
              {cart.length === 0 ? (
                <p className="text-center text-muted-foreground py-8">
                  {t("cartEmpty")}
                </p>
              ) : (
                <>
                  {cart.map((item) => (
                    <Card key={`${item.id}-${item.selectedSize}`}>
                      <CardContent className="flex items-center gap-4 p-4">
                        <Image
                          src={item.image}
                          alt={t(item.nameKey as any)}
                          width={60}
                          height={60}
                          className="rounded"
                        />
                        <div className="flex-1">
                          <h4 className="font-semibold">{t(item.nameKey as any)}</h4>
                          <p className="text-sm text-muted-foreground">
                            {t("size")}: {item.selectedSize}
                          </p>
                          <p className="font-bold text-green-700">{item.price.toLocaleString()} Ft</p>
                        </div>
                        <div className="flex items-center gap-2">
                          <Button
                            size="icon"
                            variant="outline"
                            onClick={() => updateQuantity(item.id, item.selectedSize, -1)}
                          >
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-8 text-center font-semibold">{item.quantity}</span>
                          <Button
                            size="icon"
                            variant="outline"
                            onClick={() => updateQuantity(item.id, item.selectedSize, 1)}
                          >
                            <Plus className="h-4 w-4" />
                          </Button>
                          <Button
                            size="icon"
                            variant="destructive"
                            onClick={() => removeFromCart(item.id, item.selectedSize)}
                          >
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  ))}
                  <div className="border-t pt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xl font-bold">
                        {t("total")}:
                      </span>
                      <span className="text-2xl font-bold text-green-700">
                        {getTotalPrice().toLocaleString()} Ft
                      </span>
                    </div>
                    <Button className="w-full bg-green-700 hover:bg-green-800" size="lg">
                      {t("checkout")}
                    </Button>
                  </div>
                </>
              )}
            </div>
          </SheetContent>
        </Sheet>
      </div>

      {/* Termékek */}
      <section className="container mx-auto px-4 py-16">
        {/* Mezek */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            {t("jerseys")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.filter(p => p.category === "jersey").map(product => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <div className="bg-muted p-8 flex items-center justify-center">
                    <Image
                      src={product.image}
                      alt={t(product.nameKey as any)}
                      width={600}
                      height={600}
                      className="object-contain"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-xl mb-2">{t(product.nameKey as any)}</CardTitle>
                  <p className="text-2xl font-bold text-green-700 mb-4">
                    {product.price.toLocaleString()} Ft
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map(size => (
                      <Button
                        key={size}
                        variant="outline"
                        size="sm"
                        onClick={() => addToCart(product, size)}
                        className="hover:bg-green-700 hover:text-white"
                      >
                        {size}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Nadrágok */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            {t("shorts")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.filter(p => p.category === "shorts").map(product => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <div className="bg-muted p-8 flex items-center justify-center">
                    <Image
                      src={product.image}
                      alt={t(product.nameKey as any)}
                      width={600}
                      height={600}
                      className="object-contain"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-xl mb-2">{t(product.nameKey as any)}</CardTitle>
                  <p className="text-2xl font-bold text-green-700 mb-4">
                    {product.price.toLocaleString()} Ft
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map(size => (
                      <Button
                        key={size}
                        variant="outline"
                        size="sm"
                        onClick={() => addToCart(product, size)}
                        className="hover:bg-green-700 hover:text-white"
                      >
                        {size}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Sapkák */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            {t("caps")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.filter(p => p.category === "cap").map(product => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <div className="bg-muted p-8 flex items-center justify-center">
                    <Image
                      src={product.image}
                      alt={t(product.nameKey as any)}
                      width={600}
                      height={600}
                      className="object-contain"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-xl mb-2">{t(product.nameKey as any)}</CardTitle>
                  <p className="text-2xl font-bold text-green-700 mb-4">
                    {product.price.toLocaleString()} Ft
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map(size => (
                      <Button
                        key={size}
                        variant="outline"
                        size="sm"
                        onClick={() => addToCart(product, size)}
                        className="hover:bg-green-700 hover:text-white"
                      >
                        {size}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Zoknik */}
        <div className="mb-16">
          <h2 className="text-3xl font-bold mb-8">
            {t("socks")}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.filter(p => p.category === "socks").map(product => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <div className="bg-muted p-8 flex items-center justify-center">
                    <Image
                      src={product.image}
                      alt={t(product.nameKey as any)}
                      width={600}
                      height={600}
                      className="object-contain"
                    />
                  </div>
                </CardHeader>
                <CardContent className="p-4">
                  <CardTitle className="text-xl mb-2">{t(product.nameKey as any)}</CardTitle>
                  <p className="text-2xl font-bold text-green-700 mb-4">
                    {product.price.toLocaleString()} Ft
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {product.sizes.map(size => (
                      <Button
                        key={size}
                        variant="outline"
                        size="sm"
                        onClick={() => addToCart(product, size)}
                        className="hover:bg-green-700 hover:text-white"
                      >
                        {size}
                      </Button>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>


    </main>
  )
}