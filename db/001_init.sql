CREATE TABLE IF NOT EXISTS "Lead" (
  "id" TEXT NOT NULL,
  "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
  "type" TEXT NOT NULL DEFAULT 'form',
  "country" TEXT,
  "city" TEXT,
  "name" TEXT,
  "phone" TEXT,
  "email" TEXT,
  "address" TEXT,
  "page" TEXT,
  "details" TEXT,
  "score" TEXT,
  "status" TEXT NOT NULL DEFAULT 'new',
  CONSTRAINT "Lead_pkey" PRIMARY KEY ("id")
);
CREATE INDEX IF NOT EXISTS "Lead_createdAt_idx" ON "Lead" ("createdAt");
CREATE INDEX IF NOT EXISTS "Lead_status_idx" ON "Lead" ("status");
